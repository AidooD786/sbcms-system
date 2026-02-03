



-- ===== DATABASE SCHEMA FOR SBCMS =====
-- This SQL file creates the database structure for the Secure Broadcast Cybersecurity Management System

-- Create database
CREATE DATABASE IF NOT EXISTS sbcms_db;
USE sbcms_db;

-- ===== USERS TABLE =====
CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    password_salt VARCHAR(255) NOT NULL,
    department ENUM('it_ot', 'broadcast', 'newsroom', 'security', 'management') NOT NULL,
    role ENUM('admin', 'broadcaster', 'analyst', 'manager', 'staff') NOT NULL,
    mfa_enabled BOOLEAN DEFAULT FALSE,
    mfa_secret VARCHAR(255),
    last_login TIMESTAMP NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_department (department),
    INDEX idx_role (role)
);

-- ===== SESSIONS TABLE =====
CREATE TABLE sessions (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    token VARCHAR(255) NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_token (token),
    INDEX idx_user_id (user_id),
    INDEX idx_expires_at (expires_at)
);

-- ===== BROADCAST SYSTEMS TABLE =====
CREATE TABLE broadcast_systems (
    id VARCHAR(36) PRIMARY KEY,
    system_name VARCHAR(100) NOT NULL,
    system_type ENUM('broadcast_server', 'streaming_server', 'newsroom_system', 'firewall', 'storage') NOT NULL,
    ip_address VARCHAR(45),
    status ENUM('online', 'offline', 'degraded', 'maintenance') DEFAULT 'online',
    cpu_usage DECIMAL(5,2) DEFAULT 0,
    memory_usage DECIMAL(5,2) DEFAULT 0,
    disk_usage DECIMAL(5,2) DEFAULT 0,
    uptime_seconds BIGINT DEFAULT 0,
    last_check TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_system_type (system_type),
    INDEX idx_status (status)
);

-- ===== SECURITY EVENTS TABLE =====
CREATE TABLE security_events (
    id VARCHAR(36) PRIMARY KEY,
    event_type ENUM('login_attempt', 'failed_login', 'password_change', 'user_lockout', 
                   'file_access', 'system_alert', 'network_scan', 'malware_detected',
                   'ransomware_attempt', 'signal_hijack_attempt') NOT NULL,
    severity ENUM('low', 'medium', 'high', 'critical') NOT NULL,
    source_ip VARCHAR(45),
    user_id VARCHAR(36) NULL,
    system_id VARCHAR(36) NULL,
    description TEXT,
    details JSON,
    resolved BOOLEAN DEFAULT FALSE,
    resolved_at TIMESTAMP NULL,
    resolved_by VARCHAR(36) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (system_id) REFERENCES broadcast_systems(id) ON DELETE SET NULL,
    INDEX idx_event_type (event_type),
    INDEX idx_severity (severity),
    INDEX idx_created_at (created_at),
    INDEX idx_resolved (resolved)
);

-- ===== INCIDENT REPORTS TABLE =====
CREATE TABLE incident_reports (
    id VARCHAR(36) PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    incident_type ENUM('ransomware', 'data_breach', 'signal_hijacking', 'dos_attack',
                      'malware', 'physical_breach', 'insider_threat', 'other') NOT NULL,
    severity ENUM('low', 'medium', 'high', 'critical') NOT NULL,
    status ENUM('reported', 'investigating', 'contained', 'resolved', 'closed') DEFAULT 'reported',
    description TEXT NOT NULL,
    affected_systems JSON,
    reporter_id VARCHAR(36) NOT NULL,
    assigned_to VARCHAR(36) NULL,
    root_cause TEXT,
    mitigation_steps TEXT,
    lessons_learned TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP NULL,
    closed_at TIMESTAMP NULL,
    FOREIGN KEY (reporter_id) REFERENCES users(id),
    FOREIGN KEY (assigned_to) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_incident_type (incident_type),
    INDEX idx_severity (severity),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
);

-- ===== SYSTEM LOGS TABLE =====
CREATE TABLE system_logs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    log_level ENUM('info', 'warning', 'error', 'critical') NOT NULL,
    component VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    details JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_log_level (log_level),
    INDEX idx_component (component),
    INDEX idx_created_at (created_at)
);

-- ===== BACKUP RECORDS TABLE =====
CREATE TABLE backup_records (
    id VARCHAR(36) PRIMARY KEY,
    backup_type ENUM('full', 'incremental', 'differential') NOT NULL,
    target_system VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    size_mb DECIMAL(10,2),
    status ENUM('started', 'completed', 'failed', 'verified') NOT NULL,
    checksum VARCHAR(255),
    started_at TIMESTAMP NOT NULL,
    completed_at TIMESTAMP NULL,
    verified_at TIMESTAMP NULL,
    verified_by VARCHAR(36) NULL,
    notes TEXT,
    FOREIGN KEY (verified_by) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_backup_type (backup_type),
    INDEX idx_status (status),
    INDEX idx_started_at (started_at)
);

-- ===== AUDIT LOG TABLE =====
CREATE TABLE audit_log (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36) NULL,
    action VARCHAR(100) NOT NULL,
    resource_type VARCHAR(50) NOT NULL,
    resource_id VARCHAR(36),
    changes JSON,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_action (action),
    INDEX idx_resource_type (resource_type),
    INDEX idx_created_at (created_at),
    INDEX idx_user_id (user_id)
);

-- ===== PASSWORD HISTORY TABLE (for security compliance) =====
CREATE TABLE password_history (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_changed_at (changed_at)
);

-- ===== THREAT INTELLIGENCE FEEDS =====
CREATE TABLE threat_intelligence (
    id VARCHAR(36) PRIMARY KEY,
    threat_type VARCHAR(100) NOT NULL,
    source VARCHAR(100) NOT NULL,
    ioc_type ENUM('ip', 'domain', 'hash', 'url', 'email') NOT NULL,
    ioc_value TEXT NOT NULL,
    severity ENUM('low', 'medium', 'high', 'critical') NOT NULL,
    first_seen TIMESTAMP NULL,
    last_seen TIMESTAMP NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_threat_type (threat_type),
    INDEX idx_ioc_type (ioc_type),
    INDEX idx_severity (severity),
    INDEX idx_is_active (is_active)
);

-- ===== INSERT SAMPLE DATA =====
-- Insert sample users (passwords are hashed with SHA-256 and salt in real implementation)
-- For demo purposes, we're using simple passwords that would be hashed in production
INSERT INTO users (id, full_name, email, password_hash, password_salt, department, role, mfa_enabled) VALUES
('user_admin_001', 'System Administrator', 'admin@starrfm.com', 'hashed_password_1', 'salt_1', 'it_ot', 'admin', TRUE),
('user_broadcast_001', 'Broadcast Engineer', 'engineer@starrfm.com', 'hashed_password_2', 'salt_2', 'broadcast', 'broadcaster', TRUE),
('user_security_001', 'Security Analyst', 'analyst@starrfm.com', 'hashed_password_3', 'salt_3', 'security', 'analyst', TRUE),
('user_news_001', 'Newsroom Staff', 'news@starrfm.com', 'hashed_password_4', 'salt_4', 'newsroom', 'staff', FALSE),
('user_manager_001', 'IT Manager', 'manager@starrfm.com', 'hashed_password_5', 'salt_5', 'management', 'manager', TRUE);

-- Insert sample broadcast systems
INSERT INTO broadcast_systems (id, system_name, system_type, ip_address, status, cpu_usage, memory_usage, disk_usage, uptime_seconds) VALUES
('system_001', 'On-Air Broadcast Server 1', 'broadcast_server', '192.168.1.10', 'online', 42.5, 68.2, 45.3, 1296000),
('system_002', 'Streaming Server Cluster', 'streaming_server', '192.168.1.20', 'online', 38.1, 54.7, 62.8, 864000),
('system_003', 'Digital Newsroom System', 'newsroom_system', '192.168.1.30', 'online', 28.4, 45.1, 38.9, 1728000),
('system_004', 'Main Firewall', 'firewall', '192.168.1.1', 'online', 15.2, 32.8, 12.4, 2592000),
('system_005', 'Media Storage Server', 'storage', '192.168.1.40', 'online', 22.7, 41.3, 78.5, 2160000);

-- Insert sample security events
INSERT INTO security_events (id, event_type, severity, source_ip, user_id, system_id, description, resolved) VALUES
('event_001', 'failed_login', 'medium', '203.0.113.45', NULL, NULL, 'Multiple failed login attempts from external IP', TRUE),
('event_002', 'network_scan', 'low', '198.51.100.23', NULL, 'system_004', 'Port scan detected on firewall', TRUE),
('event_003', 'system_alert', 'high', NULL, NULL, 'system_002', 'High CPU usage on streaming server', FALSE),
('event_004', 'login_attempt', 'low', '192.168.1.100', 'user_broadcast_001', NULL, 'Successful login from broadcast studio', TRUE),
('event_005', 'malware_detected', 'critical', NULL, NULL, 'system_005', 'Potential malware detected on storage server', FALSE);

-- Insert sample incident reports
INSERT INTO incident_reports (id, title, incident_type, severity, status, description, reporter_id, assigned_to) VALUES
('incident_001', 'Ransomware Attempt on Newsroom System', 'ransomware', 'critical', 'contained', 'Attempted ransomware encryption detected on newsroom workstations', 'user_security_001', 'user_admin_001'),
('incident_002', 'Unaired Content Incident', 'signal_hijacking', 'high', 'resolved', 'Attempt to broadcast unauthorized content was prevented', 'user_broadcast_001', 'user_manager_001'),
('incident_003', 'Data Exfiltration Attempt', 'data_breach', 'medium', 'investigating', 'Suspicious data transfer to external IP address', 'user_security_001', 'user_security_001');

-- Insert sample system logs
INSERT INTO system_logs (log_level, component, message) VALUES
('info', 'Authentication', 'User admin@starrfm.com logged in successfully'),
('warning', 'Broadcast Server', 'High memory usage detected on broadcast server'),
('error', 'Streaming Service', 'Stream interruption detected, failover activated'),
('info', 'Backup System', 'Daily backup completed successfully');

-- Insert sample backup records
INSERT INTO backup_records (id, backup_type, target_system, location, size_mb, status, started_at, completed_at) VALUES
('backup_001', 'full', 'Media Storage Server', '/backups/storage_full_20240108.tar.gz', 2450.75, 'verified', '2026-01-08 02:00:00', '2026-01-08 03:30:00'),
('backup_002', 'incremental', 'Newsroom System', '/backups/newsroom_inc_20240108.tar.gz', 125.50, 'completed', '2026-01-08 12:00:00', '2026-01-08 12:15:00');

-- Insert sample threat intelligence
INSERT INTO threat_intelligence (id, threat_type, source, ioc_type, ioc_value, severity, description) VALUES
('threat_001', 'Ransomware', 'External Feed', 'ip', '203.0.113.77', 'high', 'Known ransomware command and control server'),
('threat_002', 'Phishing', 'Internal Analysis', 'domain', 'fake-starrfm-login.com', 'medium', 'Phishing domain targeting Starr FM staff');

-- ===== CREATE VIEWS FOR REPORTING =====
CREATE VIEW security_overview AS
SELECT 
    DATE(created_at) as date,
    COUNT(*) as total_events,
    SUM(CASE WHEN severity = 'critical' THEN 1 ELSE 0 END) as critical_events,
    SUM(CASE WHEN severity = 'high' THEN 1 ELSE 0 END) as high_events,
    SUM(CASE WHEN severity = 'medium' THEN 1 ELSE 0 END) as medium_events,
    SUM(CASE WHEN severity = 'low' THEN 1 ELSE 0 END) as low_events
FROM security_events
WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY DATE(created_at);

CREATE VIEW system_status_summary AS
SELECT 
    system_type,
    COUNT(*) as total_systems,
    SUM(CASE WHEN status = 'online' THEN 1 ELSE 0 END) as online_count,
    SUM(CASE WHEN status = 'offline' THEN 1 ELSE 0 END) as offline_count,
    SUM(CASE WHEN status = 'degraded' THEN 1 ELSE 0 END) as degraded_count,
    AVG(cpu_usage) as avg_cpu,
    AVG(memory_usage) as avg_memory
FROM broadcast_systems
GROUP BY system_type;

CREATE VIEW user_activity_log AS
SELECT 
    u.full_name,
    u.email,
    u.department,
    u.role,
    COUNT(DISTINCT s.id) as session_count,
    MAX(s.created_at) as last_session
FROM users u
LEFT JOIN sessions s ON u.id = s.user_id
GROUP BY u.id, u.full_name, u.email, u.department, u.role;

-- ===== CREATE STORED PROCEDURES =====
DELIMITER //

CREATE PROCEDURE GetSystemHealthReport()
BEGIN
    SELECT 
        system_name,
        system_type,
        status,
        cpu_usage,
        memory_usage,
        disk_usage,
        FLOOR(uptime_seconds / 86400) as uptime_days,
        last_check
    FROM broadcast_systems
    ORDER BY 
        CASE status 
            WHEN 'offline' THEN 1
            WHEN 'degraded' THEN 2
            WHEN 'maintenance' THEN 3
            WHEN 'online' THEN 4
        END,
        system_type;
END //

CREATE PROCEDURE GetSecurityIncidentsByDate(
    IN start_date DATE,
    IN end_date DATE
)
BEGIN
    SELECT 
        ir.title,
        ir.incident_type,
        ir.severity,
        ir.status,
        ir.created_at,
        u1.full_name as reporter,
        u2.full_name as assigned_to
    FROM incident_reports ir
    LEFT JOIN users u1 ON ir.reporter_id = u1.id
    LEFT JOIN users u2 ON ir.assigned_to = u2.id
    WHERE DATE(ir.created_at) BETWEEN start_date AND end_date
    ORDER BY 
        CASE severity 
            WHEN 'critical' THEN 1
            WHEN 'high' THEN 2
            WHEN 'medium' THEN 3
            WHEN 'low' THEN 4
        END,
        ir.created_at DESC;
END //

CREATE PROCEDURE GenerateDailySecurityReport()
BEGIN
    -- Get daily statistics
    SELECT 
        'Security Events' as metric,
        COUNT(*) as value
    FROM security_events
    WHERE DATE(created_at) = CURDATE()
    
    UNION ALL
    
    SELECT 
        'Active Incidents' as metric,
        COUNT(*) as value
    FROM incident_reports
    WHERE status IN ('reported', 'investigating', 'contained')
    
    UNION ALL
    
    SELECT 
        'Systems Online' as metric,
        COUNT(*) as value
    FROM broadcast_systems
    WHERE status = 'online'
    
    UNION ALL
    
    SELECT 
        'Failed Logins' as metric,
        COUNT(*) as value
    FROM security_events
    WHERE event_type = 'failed_login' 
    AND DATE(created_at) = CURDATE();
END //

DELIMITER ;

-- ===== CREATE TRIGGERS =====
-- Log password changes for security audit
DELIMITER //

CREATE TRIGGER AfterUserPasswordUpdate
AFTER UPDATE ON users
FOR EACH ROW
BEGIN
    IF OLD.password_hash != NEW.password_hash THEN
        INSERT INTO password_history (user_id, password_hash)
        VALUES (NEW.id, OLD.password_hash);
        
        INSERT INTO audit_log (user_id, action, resource_type, resource_id, changes)
        VALUES (
            NEW.id, 
            'PASSWORD_CHANGE', 
            'USER', 
            NEW.id,
            JSON_OBJECT('old_hash', LEFT(OLD.password_hash, 10), 'new_hash', LEFT(NEW.password_hash, 10))
        );
    END IF;
END //

-- Log security event resolutions
CREATE TRIGGER AfterSecurityEventResolved
AFTER UPDATE ON security_events
FOR EACH ROW
BEGIN
    IF OLD.resolved = FALSE AND NEW.resolved = TRUE THEN
        INSERT INTO audit_log (user_id, action, resource_type, resource_id, changes)
        VALUES (
            NEW.resolved_by,
            'SECURITY_EVENT_RESOLVED',
            'SECURITY_EVENT',
            NEW.id,
            JSON_OBJECT('event_type', NEW.event_type, 'severity', NEW.severity)
        );
    END IF;
END //

DELIMITER ;

-- ===== CREATE INDEXES FOR PERFORMANCE =====
CREATE INDEX idx_security_events_resolved_created ON security_events(resolved, created_at DESC);
CREATE INDEX idx_incident_reports_status_severity ON incident_reports(status, severity DESC, created_at DESC);
CREATE INDEX idx_broadcast_systems_last_check ON broadcast_systems(last_check DESC);
CREATE INDEX idx_users_last_login ON users(last_login DESC);

-- ===== CREATE USER FOR APPLICATION =====
-- Note: In production, use more secure credentials
CREATE USER IF NOT EXISTS 'sbcms_app'@'localhost' IDENTIFIED BY 'SecurePass123!';
GRANT SELECT, INSERT, UPDATE, DELETE, EXECUTE ON sbcms_db.* TO 'sbcms_app'@'localhost';
FLUSH PRIVILEGES;

-- ===== COMMENTS FOR DOCUMENTATION =====
-- This database schema supports the SBCMS application with:
-- 1. User authentication and authorization
-- 2. Broadcast system monitoring
-- 3. Security event tracking
-- 4. Incident management
-- 5. Audit logging for compliance
-- 6. Backup management
-- 7. Threat intelligence integration

-- The schema is designed to be scalable and follows security best practices:
-- 1. Password hashing with salt (implemented at application level)
-- 2. Audit trails for all critical operations
-- 3. Proper indexing for performance
-- 4. Referential integrity with foreign keys
-- 5. Data validation through ENUM types