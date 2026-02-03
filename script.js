



// // // ===== GLOBAL VARIABLES =====
// // let currentUser = null;
// // let isLoggedIn = false;

// // // ===== DOM READY =====
// // document.addEventListener('DOMContentLoaded', function() {
// //     // Initialize based on current page
// //     const currentPage = window.location.pathname.split('/').pop();
    
// //     switch(currentPage) {
// //         case 'index.html':
// //         case '':
// //             initHomePage();
// //             break;
// //         case 'login.html':
// //             initLoginPage();
// //             break;
// //         case 'signup.html':
// //             initSignupPage();
// //             break;
// //         case 'dashboard.html':
// //             initDashboard();
// //             break;
// //     }
    
// //     // Initialize mobile menu toggle
// //     initMobileMenu();
    
// //     // Check authentication status
// //     checkAuthStatus();
// // });

// // // ===== MOBILE MENU =====
// // function initMobileMenu() {
// //     const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
// //     const mainNav = document.querySelector('.main-nav');
    
// //     if (mobileMenuBtn && mainNav) {
// //         mobileMenuBtn.addEventListener('click', function() {
// //             mainNav.classList.toggle('show');
// //         });
// //     }
// // }

// // // ===== AUTHENTICATION FUNCTIONS =====
// // function checkAuthStatus() {
// //     const authToken = localStorage.getItem('sbcms_auth_token');
// //     const userData = localStorage.getItem('sbcms_user_data');
    
// //     if (authToken && userData) {
// //         isLoggedIn = true;
// //         currentUser = JSON.parse(userData);
        
// //         // Redirect from login/signup to dashboard if already logged in
// //         const currentPage = window.location.pathname.split('/').pop();
// //         if ((currentPage === 'login.html' || currentPage === 'signup.html' || currentPage === 'index.html') && isLoggedIn) {
// //             window.location.href = 'dashboard.html';
// //         }
// //     } else {
// //         // Redirect from dashboard to login if not authenticated
// //         const currentPage = window.location.pathname.split('/').pop();
// //         if (currentPage === 'dashboard.html' && !isLoggedIn) {
// //             window.location.href = 'login.html';
// //         }
// //     }
// // }

// // function loginUser(email, password) {
// //     // In a real application, this would be an API call
// //     // For demo purposes, we'll simulate a login
    
// //     // Check if user exists in localStorage
// //     const users = JSON.parse(localStorage.getItem('sbcms_users')) || [];
// //     const user = users.find(u => u.email === email);
    
// //     if (!user) {
// //         return { success: false, message: 'User not found' };
// //     }
    
// //     // In a real app, passwords would be hashed and compared server-side
// //     // For demo, we're comparing plain text (not secure for production!)
// //     if (user.password !== password) {
// //         return { success: false, message: 'Invalid password' };
// //     }
    
// //     // Generate auth token (in real app, this would come from server)
// //     const authToken = generateAuthToken();
    
// //     // Store auth data
// //     localStorage.setItem('sbcms_auth_token', authToken);
// //     localStorage.setItem('sbcms_user_data', JSON.stringify({
// //         id: user.id,
// //         name: user.fullName,
// //         email: user.email,
// //         department: user.department,
// //         role: user.role
// //     }));
    
// //     return { success: true, user: user };
// // }

// // function registerUser(userData) {
// //     // In a real application, this would be an API call
    
// //     // Check if user already exists
// //     const users = JSON.parse(localStorage.getItem('sbcms_users')) || [];
// //     const existingUser = users.find(u => u.email === userData.email);
    
// //     if (existingUser) {
// //         return { success: false, message: 'User with this email already exists' };
// //     }
    
// //     // Create new user
// //     const newUser = {
// //         id: generateUserId(),
// //         ...userData,
// //         createdAt: new Date().toISOString(),
// //         isActive: true
// //     };
    
// //     users.push(newUser);
// //     localStorage.setItem('sbcms_users', JSON.stringify(users));
    
// //     return { success: true, user: newUser };
// // }

// // function logoutUser() {
// //     localStorage.removeItem('sbcms_auth_token');
// //     localStorage.removeItem('sbcms_user_data');
// //     isLoggedIn = false;
// //     currentUser = null;
// //     window.location.href = 'index.html';
// // }

// // function generateAuthToken() {
// //     return 'sbcms_' + Math.random().toString(36).substr(2) + Date.now().toString(36);
// // }

// // function generateUserId() {
// //     return 'user_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
// // }

// // // ===== PASSWORD STRENGTH CHECKER =====
// // function checkPasswordStrength(password) {
// //     let strength = 0;
    
// //     // Length check
// //     if (password.length >= 8) strength++;
// //     if (password.length >= 12) strength++;
    
// //     // Character variety checks
// //     if (/[A-Z]/.test(password)) strength++;
// //     if (/[a-z]/.test(password)) strength++;
// //     if (/[0-9]/.test(password)) strength++;
// //     if (/[^A-Za-z0-9]/.test(password)) strength++;
    
// //     // Cap at 5
// //     return Math.min(strength, 5);
// // }

// // function updatePasswordStrengthVisual(password) {
// //     const strength = checkPasswordStrength(password);
// //     const strengthBar = document.getElementById('passwordStrength');
// //     const strengthLabels = document.querySelectorAll('.strength-label');
    
// //     if (strengthBar) {
// //         const width = (strength / 5) * 100;
// //         strengthBar.style.width = `${width}%`;
        
// //         // Update color based on strength
// //         if (strength <= 1) {
// //             strengthBar.style.backgroundColor = '#dc3545'; // Red
// //         } else if (strength <= 3) {
// //             strengthBar.style.backgroundColor = '#ffc107'; // Yellow
// //         } else {
// //             strengthBar.style.backgroundColor = '#28a745'; // Green
// //         }
// //     }
    
// //     // Update strength labels
// //     strengthLabels.forEach((label, index) => {
// //         if (index < strength) {
// //             label.classList.add('active');
// //         } else {
// //             label.classList.remove('active');
// //         }
// //     });
    
// //     // Update requirement checkmarks
// //     updatePasswordRequirements(password);
// // }

// // function updatePasswordRequirements(password) {
// //     const requirements = {
// //         length: password.length >= 8,
// //         uppercase: /[A-Z]/.test(password),
// //         lowercase: /[a-z]/.test(password),
// //         number: /[0-9]/.test(password),
// //         special: /[^A-Za-z0-9]/.test(password)
// //     };
    
// //     // Update each requirement visual
// //     Object.keys(requirements).forEach(req => {
// //         const element = document.querySelector(`.req-${req}`);
// //         if (element) {
// //             if (requirements[req]) {
// //                 element.classList.add('valid');
// //             } else {
// //                 element.classList.remove('valid');
// //             }
// //         }
// //     });
// // }

// // // ===== HOME PAGE INITIALIZATION =====
// // function initHomePage() {
// //     // Add any home page specific initialization here
// //     console.log('Home page initialized');
// // }

// // // ===== LOGIN PAGE INITIALIZATION =====
// // function initLoginPage() {
// //     // ADD PRE-CONFIGURED DEMO ACCOUNTS IF NONE EXIST
// //     if (!localStorage.getItem('sbcms_users')) {
// //         const demoUsers = [
// //             {
// //                 id: 'user_admin_001',
// //                 fullName: 'System Administrator',
// //                 email: 'admin@starrfm.com',
// //                 password: 'Admin@2024', // This would be hashed in real app
// //                 department: 'it_ot',
// //                 role: 'admin',
// //                 enableMfa: true,
// //                 createdAt: new Date().toISOString(),
// //                 isActive: true
// //             },
// //             {
// //                 id: 'user_security_001',
// //                 fullName: 'Security Analyst',
// //                 email: 'analyst@starrfm.com',
// //                 password: 'Analyst@2024',
// //                 department: 'security',
// //                 role: 'analyst',
// //                 enableMfa: true,
// //                 createdAt: new Date().toISOString(),
// //                 isActive: true
// //             },
// //             {
// //                 id: 'user_broadcast_001',
// //                 fullName: 'Broadcast Engineer',
// //                 email: 'engineer@starrfm.com',
// //                 password: 'Engineer@2024',
// //                 department: 'broadcast',
// //                 role: 'broadcaster',
// //                 enableMfa: false,
// //                 createdAt: new Date().toISOString(),
// //                 isActive: true
// //             }
// //         ];
// //         localStorage.setItem('sbcms_users', JSON.stringify(demoUsers));
// //         console.log('Demo accounts created:', demoUsers.map(u => ({email: u.email, role: u.role})));
// //     }
    
// //     // Password visibility toggle
// //     const showPasswordBtn = document.getElementById('showPasswordBtn');
// //     const passwordInput = document.getElementById('password');
    
// //     if (showPasswordBtn && passwordInput) {
// //         showPasswordBtn.addEventListener('click', function() {
// //             const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
// //             passwordInput.setAttribute('type', type);
// //             this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
// //         });
// //     }
    
// //     // Password strength monitoring
// //     if (passwordInput) {
// //         passwordInput.addEventListener('input', function() {
// //             updatePasswordStrengthVisual(this.value);
// //         });
// //     }
    
// //     // Tab switching
// //     const loginTab = document.getElementById('loginTab');
// //     const mfaTab = document.getElementById('mfaTab');
// //     const loginForm = document.getElementById('loginForm');
// //     const mfaForm = document.getElementById('mfaForm');
    
// //     if (loginTab && mfaTab) {
// //         loginTab.addEventListener('click', function() {
// //             loginTab.classList.add('active');
// //             mfaTab.classList.remove('active');
// //             loginForm.classList.add('active');
// //             mfaForm.classList.remove('active');
// //         });
        
// //         mfaTab.addEventListener('click', function() {
// //             mfaTab.classList.add('active');
// //             loginTab.classList.remove('active');
// //             mfaForm.classList.add('active');
// //             loginForm.classList.remove('active');
// //         });
// //     }
    
// //     // Login form submission
// //     const loginFormElement = document.getElementById('loginForm');
// //     if (loginFormElement) {
// //         loginFormElement.addEventListener('submit', function(e) {
// //             e.preventDefault();
            
// //             const email = document.getElementById('email').value;
// //             const password = document.getElementById('password').value;
// //             const remember = document.getElementById('remember').checked;
            
// //             // Basic validation
// //             if (!email || !password) {
// //                 showNotification('Please fill in all fields', 'error');
// //                 return;
// //             }
            
// //             // Show loading state
// //             const submitBtn = this.querySelector('button[type="submit"]');
// //             const originalText = submitBtn.innerHTML;
// //             submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
// //             submitBtn.disabled = true;
            
// //             // Simulate API call delay
// //             setTimeout(() => {
// //                 const result = loginUser(email, password);
                
// //                 if (result.success) {
// //                     showNotification('Login successful! Redirecting to dashboard...', 'success');
                    
// //                     // Switch to MFA tab if enabled
// //                     if (loginTab && mfaTab) {
// //                         loginTab.classList.remove('active');
// //                         mfaTab.classList.add('active');
// //                         loginForm.classList.remove('active');
// //                         mfaForm.classList.add('active');
                        
// //                         // Start MFA timer
// //                         startMfaTimer();
                        
// //                         // Simulate sending MFA code
// //                         simulateMfaCode();
// //                     } else {
// //                         // If no MFA, redirect directly
// //                         setTimeout(() => {
// //                             window.location.href = 'dashboard.html';
// //                         }, 1500);
// //                     }
// //                 } else {
// //                     showNotification(result.message || 'Login failed', 'error');
// //                 }
                
// //                 // Reset button
// //                 submitBtn.innerHTML = originalText;
// //                 submitBtn.disabled = false;
// //             }, 1500);
// //         });
// //     }
    
// //     // MFA form submission
// //     const mfaFormElement = document.getElementById('mfaForm');
// //     if (mfaFormElement) {
// //         mfaFormElement.addEventListener('submit', function(e) {
// //             e.preventDefault();
            
// //             const mfaCode = document.getElementById('mfaCode').value;
            
// //             if (!mfaCode || mfaCode.length !== 6) {
// //                 showNotification('Please enter a valid 6-digit code', 'error');
// //                 return;
// //             }
            
// //             // For demo, accept any 6-digit code
// //             if (mfaCode.length === 6) {
// //                 showNotification('MFA verification successful!', 'success');
                
// //                 setTimeout(() => {
// //                     window.location.href = 'dashboard.html';
// //                 }, 1000);
// //             } else {
// //                 showNotification('Invalid verification code', 'error');
// //             }
// //         });
// //     }
    
// //     // Forgot password link
// //     const forgotPasswordLink = document.getElementById('forgotPasswordLink');
// //     if (forgotPasswordLink) {
// //         forgotPasswordLink.addEventListener('click', function(e) {
// //             e.preventDefault();
// //             showNotification('Password reset functionality would be implemented here', 'info');
// //         });
// //     }
    
// //     // Resend MFA code
// //     const resendMfaBtn = document.getElementById('resendMfaBtn');
// //     if (resendMfaBtn) {
// //         resendMfaBtn.addEventListener('click', function(e) {
// //             e.preventDefault();
// //             startMfaTimer();
// //             simulateMfaCode();
// //             showNotification('New verification code sent to your email', 'success');
// //         });
// //     }
// // }

// // // ===== MFA TIMER =====
// // function startMfaTimer() {
// //     let timeLeft = 120; // 2 minutes in seconds
// //     const timerElement = document.getElementById('timer');
// //     const mfaTimer = document.getElementById('mfaTimer');
    
// //     if (!timerElement) return;
    
// //     const timerInterval = setInterval(() => {
// //         const minutes = Math.floor(timeLeft / 60);
// //         const seconds = timeLeft % 60;
        
// //         timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
// //         if (timeLeft <= 0) {
// //             clearInterval(timerInterval);
// //             timerElement.textContent = '00:00';
// //             mfaTimer.style.color = '#dc3545';
// //         }
        
// //         timeLeft--;
// //     }, 1000);
// // }

// // function simulateMfaCode() {
// //     // In a real app, this would send an email
// //     // For demo, we'll just log it
// //     const demoCode = Math.floor(100000 + Math.random() * 900000);
// //     console.log(`Demo MFA code: ${demoCode}`);
// // }

// // // ===== SIGNUP PAGE INITIALIZATION =====
// // function initSignupPage() {
// //     // Multi-step form navigation
// //     let currentStep = 1;
// //     const totalSteps = 3;
    
// //     // Step navigation buttons
// //     const nextBtn1 = document.getElementById('nextBtn1');
// //     const nextBtn2 = document.getElementById('nextBtn2');
// //     const backBtn2 = document.getElementById('backBtn2');
// //     const backBtn3 = document.getElementById('backBtn3');
// //     const cancelBtn = document.getElementById('cancelBtn');
// //     const submitBtn = document.getElementById('submitBtn');
    
// //     // Form steps
// //     const step1 = document.getElementById('step1');
// //     const step2 = document.getElementById('step2');
// //     const step3 = document.getElementById('step3');
// //     const successMessage = document.getElementById('successMessage');
    
// //     // Progress steps
// //     const progressSteps = document.querySelectorAll('.progress-step');
    
// //     // Form inputs
// //     const fullNameInput = document.getElementById('fullName');
// //     const emailInput = document.getElementById('email');
// //     const departmentSelect = document.getElementById('department');
// //     const roleSelect = document.getElementById('role');
// //     const passwordInput = document.getElementById('password');
// //     const confirmPasswordInput = document.getElementById('confirmPassword');
// //     const enableMfaCheckbox = document.getElementById('enableMfa');
    
// //     // Review fields
// //     const reviewName = document.getElementById('reviewName');
// //     const reviewEmail = document.getElementById('reviewEmail');
// //     const reviewDept = document.getElementById('reviewDept');
// //     const reviewRole = document.getElementById('reviewRole');
// //     const reviewMfa = document.getElementById('reviewMfa');
    
// //     // Password visibility toggle
// //     const showPasswordBtn = document.getElementById('showPasswordBtn');
// //     if (showPasswordBtn && passwordInput) {
// //         showPasswordBtn.addEventListener('click', function() {
// //             const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
// //             passwordInput.setAttribute('type', type);
// //             this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
// //         });
// //     }
    
// //     // Password strength monitoring
// //     if (passwordInput) {
// //         passwordInput.addEventListener('input', function() {
// //             updatePasswordStrengthVisual(this.value);
// //             checkPasswordMatch();
// //         });
// //     }
    
// //     // Confirm password match check
// //     if (confirmPasswordInput) {
// //         confirmPasswordInput.addEventListener('input', checkPasswordMatch);
// //     }
    
// //     function checkPasswordMatch() {
// //         const password = passwordInput ? passwordInput.value : '';
// //         const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';
// //         const matchElement = document.getElementById('passwordMatch');
        
// //         if (!matchElement) return;
        
// //         if (confirmPassword === '') {
// //             matchElement.textContent = '';
// //             matchElement.className = 'validation-message';
// //         } else if (password === confirmPassword) {
// //             matchElement.textContent = '✓ Passwords match';
// //             matchElement.className = 'validation-message valid';
// //         } else {
// //             matchElement.textContent = '✗ Passwords do not match';
// //             matchElement.className = 'validation-message error';
// //         }
// //     }
    
// //     // Step navigation functions
// //     function goToStep(step) {
// //         // Hide all steps
// //         [step1, step2, step3, successMessage].forEach(step => {
// //             if (step) step.style.display = 'none';
// //         });
        
// //         // Show current step
// //         if (step === 1 && step1) step1.style.display = 'block';
// //         if (step === 2 && step2) step2.style.display = 'block';
// //         if (step === 3 && step3) step3.style.display = 'block';
// //         if (step === 'success' && successMessage) successMessage.style.display = 'block';
        
// //         // Update progress steps
// //         progressSteps.forEach(progressStep => {
// //             const stepNum = parseInt(progressStep.getAttribute('data-step'));
// //             if (stepNum < step) {
// //                 progressStep.classList.add('completed');
// //                 progressStep.classList.add('active');
// //             } else if (stepNum === step) {
// //                 progressStep.classList.add('active');
// //                 progressStep.classList.remove('completed');
// //             } else {
// //                 progressStep.classList.remove('active');
// //                 progressStep.classList.remove('completed');
// //             }
// //         });
        
// //         currentStep = step;
        
// //         // Update review details if going to step 3
// //         if (step === 3) {
// //             updateReviewDetails();
// //         }
// //     }
    
// //     function updateReviewDetails() {
// //         if (reviewName && fullNameInput) reviewName.textContent = fullNameInput.value;
// //         if (reviewEmail && emailInput) reviewEmail.textContent = emailInput.value;
// //         if (reviewDept && departmentSelect) reviewDept.textContent = departmentSelect.options[departmentSelect.selectedIndex].text;
// //         if (reviewRole && roleSelect) reviewRole.textContent = roleSelect.options[roleSelect.selectedIndex].text;
// //         if (reviewMfa && enableMfaCheckbox) reviewMfa.textContent = enableMfaCheckbox.checked ? 'Yes' : 'No';
// //     }
    
// //     function validateStep1() {
// //         if (!fullNameInput || !fullNameInput.value.trim()) {
// //             showNotification('Please enter your full name', 'error');
// //             return false;
// //         }
        
// //         if (!emailInput || !emailInput.value.trim()) {
// //             showNotification('Please enter your email address', 'error');
// //             return false;
// //         }
        
// //         // Basic email validation
// //         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //         if (!emailRegex.test(emailInput.value)) {
// //             showNotification('Please enter a valid email address', 'error');
// //             return false;
// //         }
        
// //         if (!departmentSelect || departmentSelect.value === '') {
// //             showNotification('Please select your department', 'error');
// //             return false;
// //         }
        
// //         if (!roleSelect || roleSelect.value === '') {
// //             showNotification('Please select your role', 'error');
// //             return false;
// //         }
        
// //         return true;
// //     }
    
// //     function validateStep2() {
// //         if (!passwordInput || !passwordInput.value) {
// //             showNotification('Please create a password', 'error');
// //             return false;
// //         }
        
// //         // Check password strength
// //         const strength = checkPasswordStrength(passwordInput.value);
// //         if (strength < 3) {
// //             showNotification('Please create a stronger password', 'error');
// //             return false;
// //         }
        
// //         if (!confirmPasswordInput || !confirmPasswordInput.value) {
// //             showNotification('Please confirm your password', 'error');
// //             return false;
// //         }
        
// //         if (passwordInput.value !== confirmPasswordInput.value) {
// //             showNotification('Passwords do not match', 'error');
// //             return false;
// //         }
        
// //         const acceptTerms = document.getElementById('acceptTerms');
// //         if (!acceptTerms || !acceptTerms.checked) {
// //             showNotification('You must accept the terms and conditions', 'error');
// //             return false;
// //         }
        
// //         return true;
// //     }
    
// //     // Event listeners for navigation buttons
// //     if (nextBtn1) {
// //         nextBtn1.addEventListener('click', function() {
// //             if (validateStep1()) {
// //                 goToStep(2);
// //             }
// //         });
// //     }
    
// //     if (nextBtn2) {
// //         nextBtn2.addEventListener('click', function() {
// //             if (validateStep2()) {
// //                 goToStep(3);
// //             }
// //         });
// //     }
    
// //     if (backBtn2) {
// //         backBtn2.addEventListener('click', function() {
// //             goToStep(1);
// //         });
// //     }
    
// //     if (backBtn3) {
// //         backBtn3.addEventListener('click', function() {
// //             goToStep(2);
// //         });
// //     }
    
// //     if (cancelBtn) {
// //         cancelBtn.addEventListener('click', function() {
// //             if (confirm('Are you sure you want to cancel registration? All entered data will be lost.')) {
// //                 window.location.href = 'index.html';
// //             }
// //         });
// //     }
    
// //     // Form submission
// //     const signupForm = document.getElementById('signupForm');
// //     if (signupForm && submitBtn) {
// //         signupForm.addEventListener('submit', function(e) {
// //             e.preventDefault();
            
// //             // Collect all form data
// //             const userData = {
// //                 fullName: fullNameInput ? fullNameInput.value : '',
// //                 email: emailInput ? emailInput.value : '',
// //                 department: departmentSelect ? departmentSelect.value : '',
// //                 role: roleSelect ? roleSelect.value : '',
// //                 password: passwordInput ? passwordInput.value : '',
// //                 enableMfa: enableMfaCheckbox ? enableMfaCheckbox.checked : false
// //             };
            
// //             // Show loading state
// //             const originalText = submitBtn.innerHTML;
// //             submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
// //             submitBtn.disabled = true;
            
// //             // Simulate API call delay
// //             setTimeout(() => {
// //                 const result = registerUser(userData);
                
// //                 if (result.success) {
// //                     showNotification('Account created successfully!', 'success');
// //                     goToStep('success');
// //                 } else {
// //                     showNotification(result.message || 'Registration failed', 'error');
// //                     submitBtn.innerHTML = originalText;
// //                     submitBtn.disabled = false;
// //                 }
// //             }, 2000);
// //         });
// //     }
    
// //     // Initialize with step 1
// //     goToStep(1);
// // }

// // // ===== DASHBOARD INITIALIZATION =====
// // function initDashboard() {
// //     // Check authentication
// //     if (!isLoggedIn) {
// //         window.location.href = 'login.html';
// //         return;
// //     }
    
// //     // Update user info
// //     updateUserInfo();
    
// //     // Update datetime
// //     updateDateTime();
// //     setInterval(updateDateTime, 1000);
    
// //     // Initialize charts
// //     initCharts();
    
// //     // Setup event listeners
// //     setupDashboardEvents();
    
// //     // Load initial data
// //     loadDashboardData();
// // }

// // function updateUserInfo() {
// //     if (currentUser) {
// //         const userNameElement = document.getElementById('userName');
// //         const userRoleElement = document.getElementById('userRole');
        
// //         if (userNameElement) userNameElement.textContent = currentUser.name;
// //         if (userRoleElement) userRoleElement.textContent = currentUser.role;
// //     }
// // }

// // function updateDateTime() {
// //     const now = new Date();
// //     const dateTimeElement = document.getElementById('currentDateTime');
    
// //     if (dateTimeElement) {
// //         const options = { 
// //             weekday: 'long', 
// //             year: 'numeric', 
// //             month: 'long', 
// //             day: 'numeric',
// //             hour: '2-digit',
// //             minute: '2-digit',
// //             second: '2-digit'
// //         };
// //         dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
// //     }
// // }

// // function initCharts() {
// //     // Initialize threat activity chart
// //     const threatChartCanvas = document.getElementById('threatActivityChart');
    
// //     if (threatChartCanvas) {
// //         const ctx = threatChartCanvas.getContext('2d');
        
// //         // Sample data
// //         const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// //         const threatData = [12, 19, 8, 15, 22, 18, 14];
// //         const incidentData = [2, 5, 1, 3, 7, 4, 3];
        
// //         new Chart(ctx, {
// //             type: 'line',
// //             data: {
// //                 labels: days,
// //                 datasets: [
// //                     {
// //                         label: 'Threat Events',
// //                         data: threatData,
// //                         borderColor: '#2a5bd7',
// //                         backgroundColor: 'rgba(42, 91, 215, 0.1)',
// //                         borderWidth: 2,
// //                         fill: true,
// //                         tension: 0.4
// //                     },
// //                     {
// //                         label: 'Incidents',
// //                         data: incidentData,
// //                         borderColor: '#dc3545',
// //                         backgroundColor: 'rgba(220, 53, 69, 0.1)',
// //                         borderWidth: 2,
// //                         fill: true,
// //                         tension: 0.4
// //                     }
// //                 ]
// //             },
// //             options: {
// //                 responsive: true,
// //                 maintainAspectRatio: false,
// //                 plugins: {
// //                     legend: {
// //                         position: 'top',
// //                     },
// //                     tooltip: {
// //                         mode: 'index',
// //                         intersect: false
// //                     }
// //                 },
// //                 scales: {
// //                     y: {
// //                         beginAtZero: true,
// //                         title: {
// //                             display: true,
// //                             text: 'Number of Events'
// //                         }
// //                     }
// //                 }
// //             }
// //         });
// //     }
// // }

// // function setupDashboardEvents() {
// //     // Refresh button
// //     const refreshBtn = document.getElementById('refreshBtn');
// //     if (refreshBtn) {
// //         refreshBtn.addEventListener('click', function() {
// //             this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Refreshing...';
// //             this.disabled = true;
            
// //             setTimeout(() => {
// //                 loadDashboardData();
// //                 this.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
// //                 this.disabled = false;
// //                 showNotification('Dashboard data refreshed', 'success');
// //             }, 1000);
// //         });
// //     }
    
// //     // New report button
// //     const newReportBtn = document.getElementById('newReportBtn');
// //     if (newReportBtn) {
// //         newReportBtn.addEventListener('click', function() {
// //             showNotification('New incident report dialog would open here', 'info');
// //         });
// //     }
    
// //     // Logout functionality
// //     const logoutBtn = document.querySelector('a[href="index.html"]');
// //     if (logoutBtn && logoutBtn.textContent.includes('Logout')) {
// //         logoutBtn.addEventListener('click', function(e) {
// //             e.preventDefault();
// //             if (confirm('Are you sure you want to logout?')) {
// //                 logoutUser();
// //             }
// //         });
// //     }
    
// //     // Time range filter
// //     const timeRangeSelect = document.getElementById('timeRange');
// //     if (timeRangeSelect) {
// //         timeRangeSelect.addEventListener('change', function() {
// //             showNotification(`Loading data for last ${this.value} days`, 'info');
// //             // In a real app, this would reload chart data
// //         });
// //     }
// // }

// // function loadDashboardData() {
// //     // In a real app, this would fetch data from an API
// //     console.log('Loading dashboard data...');
    
// //     // Update alert count
// //     const alertCountElement = document.getElementById('alertCount');
// //     if (alertCountElement) {
// //         const randomCount = Math.floor(Math.random() * 5) + 1;
// //         alertCountElement.textContent = randomCount;
        
// //         // Update badge class based on count
// //         if (randomCount === 0) {
// //             alertCountElement.classList.remove('alert');
// //         } else {
// //             alertCountElement.classList.add('alert');
// //         }
// //     }
    
// //     // Update broadcast status
// //     const broadcastStatusElement = document.getElementById('broadcastStatus');
// //     if (broadcastStatusElement) {
// //         const statuses = ['All Online', '1 Warning', 'All Operational'];
// //         const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
// //         broadcastStatusElement.textContent = randomStatus;
// //     }
    
// //     // Update system uptime
// //     const uptimeElement = document.getElementById('systemUptime');
// //     if (uptimeElement) {
// //         const uptime = (99.5 + Math.random() * 0.5).toFixed(1);
// //         uptimeElement.textContent = `${uptime}%`;
// //     }
// // }

// // // ===== NOTIFICATION SYSTEM =====
// // function showNotification(message, type = 'info') {
// //     // Create notification element
// //     const notification = document.createElement('div');
// //     notification.className = `notification notification-${type}`;
    
// //     // Set icon based on type
// //     let icon = 'info-circle';
// //     if (type === 'success') icon = 'check-circle';
// //     if (type === 'error') icon = 'exclamation-circle';
// //     if (type === 'warning') icon = 'exclamation-triangle';
    
// //     notification.innerHTML = `
// //         <i class="fas fa-${icon}"></i>
// //         <span>${message}</span>
// //         <button class="notification-close"><i class="fas fa-times"></i></button>
// //     `;
    
// //     // Add to page
// //     document.body.appendChild(notification);
    
// //     // Add styles if not already present
// //     if (!document.getElementById('notification-styles')) {
// //         const style = document.createElement('style');
// //         style.id = 'notification-styles';
// //         style.textContent = `
// //             .notification {
// //                 position: fixed;
// //                 top: 20px;
// //                 right: 20px;
// //                 padding: 15px 20px;
// //                 border-radius: 8px;
// //                 display: flex;
// //                 align-items: center;
// //                 gap: 15px;
// //                 max-width: 400px;
// //                 z-index: 9999;
// //                 box-shadow: 0 4px 12px rgba(0,0,0,0.15);
// //                 animation: slideIn 0.3s ease;
// //                 transform: translateX(0);
// //             }
            
// //             .notification-success {
// //                 background-color: #d4edda;
// //                 color: #155724;
// //                 border-left: 4px solid #28a745;
// //             }
            
// //             .notification-error {
// //                 background-color: #f8d7da;
// //                 color: #721c24;
// //                 border-left: 4px solid #dc3545;
// //             }
            
// //             .notification-warning {
// //                 background-color: #fff3cd;
// //                 color: #856404;
// //                 border-left: 4px solid #ffc107;
// //             }
            
// //             .notification-info {
// //                 background-color: #d1ecf1;
// //                 color: #0c5460;
// //                 border-left: 4px solid #17a2b8;
// //             }
            
// //             .notification-close {
// //                 background: none;
// //                 border: none;
// //                 color: inherit;
// //                 cursor: pointer;
// //                 margin-left: auto;
// //                 padding: 0;
// //             }
            
// //             @keyframes slideIn {
// //                 from { transform: translateX(100%); }
// //                 to { transform: translateX(0); }
// //             }
// //         `;
// //         document.head.appendChild(style);
// //     }
    
// //     // Auto remove after 5 seconds
// //     setTimeout(() => {
// //         notification.style.transform = 'translateX(100%)';
// //         setTimeout(() => {
// //             if (notification.parentNode) {
// //                 notification.parentNode.removeChild(notification);
// //             }
// //         }, 300);
// //     }, 5000);
    
// //     // Close button functionality
// //     const closeBtn = notification.querySelector('.notification-close');
// //     if (closeBtn) {
// //         closeBtn.addEventListener('click', function() {
// //             notification.style.transform = 'translateX(100%)';
// //             setTimeout(() => {
// //                 if (notification.parentNode) {
// //                     notification.parentNode.removeChild(notification);
// //                 }
// //             }, 300);
// //         });
// //     }
// // }

// // // ===== UTILITY FUNCTIONS =====
// // function formatDate(date) {
// //     return new Date(date).toLocaleDateString('en-US', {
// //         year: 'numeric',
// //         month: 'short',
// //         day: 'numeric'
// //     });
// // }

// // function formatTime(date) {
// //     return new Date(date).toLocaleTimeString('en-US', {
// //         hour: '2-digit',
// //         minute: '2-digit'
// //     });
// // }

// // // Export functions for use in other modules if needed
// // window.sbcms = {
// //     loginUser,
// //     logoutUser,
// //     registerUser,
// //     showNotification,
// //     checkAuthStatus
// // };



// // ===== GLOBAL VARIABLES =====
// let currentUser = null;
// let isLoggedIn = false;
// let currentOtpCode = null; // Store the current OTP code

// // ===== DOM READY =====
// document.addEventListener('DOMContentLoaded', function() {
//     // Initialize based on current page
//     const currentPage = window.location.pathname.split('/').pop();
    
//     switch(currentPage) {
//         case 'index.html':
//         case '':
//             initHomePage();
//             break;
//         case 'login.html':
//             initLoginPage();
//             break;
//         case 'signup.html':
//             initSignupPage();
//             break;
//         case 'dashboard.html':
//             initDashboard();
//             break;
//     }
    
//     // Initialize mobile menu toggle
//     initMobileMenu();
    
//     // Check authentication status
//     checkAuthStatus();
// });

// // ===== MOBILE MENU =====
// function initMobileMenu() {
//     const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
//     const mainNav = document.querySelector('.main-nav');
    
//     if (mobileMenuBtn && mainNav) {
//         mobileMenuBtn.addEventListener('click', function() {
//             mainNav.classList.toggle('show');
//         });
//     }
// }

// // ===== AUTHENTICATION FUNCTIONS =====
// function checkAuthStatus() {
//     const authToken = localStorage.getItem('sbcms_auth_token');
//     const userData = localStorage.getItem('sbcms_user_data');
    
//     if (authToken && userData) {
//         isLoggedIn = true;
//         currentUser = JSON.parse(userData);
        
//         // Redirect from login/signup to dashboard if already logged in
//         const currentPage = window.location.pathname.split('/').pop();
//         if ((currentPage === 'login.html' || currentPage === 'signup.html' || currentPage === 'index.html') && isLoggedIn) {
//             window.location.href = 'dashboard.html';
//         }
//     } else {
//         // Redirect from dashboard to login if not authenticated
//         const currentPage = window.location.pathname.split('/').pop();
//         if (currentPage === 'dashboard.html' && !isLoggedIn) {
//             window.location.href = 'login.html';
//         }
//     }
// }

// function loginUser(email, password) {
//     // In a real application, this would be an API call
//     // For demo purposes, we'll simulate a login
    
//     // Check if user exists in localStorage
//     const users = JSON.parse(localStorage.getItem('sbcms_users')) || [];
//     const user = users.find(u => u.email === email);
    
//     if (!user) {
//         return { success: false, message: 'User not found' };
//     }
    
//     // In a real app, passwords would be hashed and compared server-side
//     // For demo, we're comparing plain text (not secure for production!)
//     if (user.password !== password) {
//         return { success: false, message: 'Invalid password' };
//     }
    
//     // Generate auth token (in real app, this would come from server)
//     const authToken = generateAuthToken();
    
//     // Store auth data
//     localStorage.setItem('sbcms_auth_token', authToken);
//     localStorage.setItem('sbcms_user_data', JSON.stringify({
//         id: user.id,
//         name: user.fullName,
//         email: user.email,
//         department: user.department,
//         role: user.role
//     }));
    
//     return { success: true, user: user };
// }

// function registerUser(userData) {
//     // In a real application, this would be an API call
    
//     // Check if user already exists
//     const users = JSON.parse(localStorage.getItem('sbcms_users')) || [];
//     const existingUser = users.find(u => u.email === userData.email);
    
//     if (existingUser) {
//         return { success: false, message: 'User with this email already exists' };
//     }
    
//     // Create new user
//     const newUser = {
//         id: generateUserId(),
//         ...userData,
//         createdAt: new Date().toISOString(),
//         isActive: true
//     };
    
//     users.push(newUser);
//     localStorage.setItem('sbcms_users', JSON.stringify(users));
    
//     return { success: true, user: newUser };
// }

// function logoutUser() {
//     localStorage.removeItem('sbcms_auth_token');
//     localStorage.removeItem('sbcms_user_data');
//     isLoggedIn = false;
//     currentUser = null;
//     window.location.href = 'index.html';
// }

// function generateAuthToken() {
//     return 'sbcms_' + Math.random().toString(36).substr(2) + Date.now().toString(36);
// }

// function generateUserId() {
//     return 'user_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
// }

// // ===== PASSWORD STRENGTH CHECKER =====
// function checkPasswordStrength(password) {
//     let strength = 0;
    
//     // Length check
//     if (password.length >= 8) strength++;
//     if (password.length >= 12) strength++;
    
//     // Character variety checks
//     if (/[A-Z]/.test(password)) strength++;
//     if (/[a-z]/.test(password)) strength++;
//     if (/[0-9]/.test(password)) strength++;
//     if (/[^A-Za-z0-9]/.test(password)) strength++;
    
//     // Cap at 5
//     return Math.min(strength, 5);
// }

// function updatePasswordStrengthVisual(password) {
//     const strength = checkPasswordStrength(password);
//     const strengthBar = document.getElementById('passwordStrength');
//     const strengthLabels = document.querySelectorAll('.strength-label');
    
//     if (strengthBar) {
//         const width = (strength / 5) * 100;
//         strengthBar.style.width = `${width}%`;
        
//         // Update color based on strength
//         if (strength <= 1) {
//             strengthBar.style.backgroundColor = '#dc3545'; // Red
//         } else if (strength <= 3) {
//             strengthBar.style.backgroundColor = '#ffc107'; // Yellow
//         } else {
//             strengthBar.style.backgroundColor = '#28a745'; // Green
//         }
//     }
    
//     // Update strength labels
//     strengthLabels.forEach((label, index) => {
//         if (index < strength) {
//             label.classList.add('active');
//         } else {
//             label.classList.remove('active');
//         }
//     });
    
//     // Update requirement checkmarks
//     updatePasswordRequirements(password);
// }

// function updatePasswordRequirements(password) {
//     const requirements = {
//         length: password.length >= 8,
//         uppercase: /[A-Z]/.test(password),
//         lowercase: /[a-z]/.test(password),
//         number: /[0-9]/.test(password),
//         special: /[^A-Za-z0-9]/.test(password)
//     };
    
//     // Update each requirement visual
//     Object.keys(requirements).forEach(req => {
//         const element = document.querySelector(`.req-${req}`);
//         if (element) {
//             if (requirements[req]) {
//                 element.classList.add('valid');
//             } else {
//                 element.classList.remove('valid');
//             }
//         }
//     });
// }

// // ===== HOME PAGE INITIALIZATION =====
// function initHomePage() {
//     // Add any home page specific initialization here
//     console.log('Home page initialized');
// }

// // ===== LOGIN PAGE INITIALIZATION =====
// function initLoginPage() {
//     // ADD PRE-CONFIGURED DEMO ACCOUNTS IF NONE EXIST
//     if (!localStorage.getItem('sbcms_users')) {
//         const demoUsers = [
//             {
//                 id: 'user_admin_001',
//                 fullName: 'System Administrator',
//                 email: 'admin@starrfm.com',
//                 password: 'Admin@2024', // This would be hashed in real app
//                 department: 'it_ot',
//                 role: 'admin',
//                 enableMfa: true,
//                 createdAt: new Date().toISOString(),
//                 isActive: true
//             },
//             {
//                 id: 'user_security_001',
//                 fullName: 'Security Analyst',
//                 email: 'analyst@starrfm.com',
//                 password: 'Analyst@2024',
//                 department: 'security',
//                 role: 'analyst',
//                 enableMfa: true,
//                 createdAt: new Date().toISOString(),
//                 isActive: true
//             },
//             {
//                 id: 'user_broadcast_001',
//                 fullName: 'Broadcast Engineer',
//                 email: 'engineer@starrfm.com',
//                 password: 'Engineer@2024',
//                 department: 'broadcast',
//                 role: 'broadcaster',
//                 enableMfa: false,
//                 createdAt: new Date().toISOString(),
//                 isActive: true
//             }
//         ];
//         localStorage.setItem('sbcms_users', JSON.stringify(demoUsers));
//         console.log('Demo accounts created:', demoUsers.map(u => ({email: u.email, role: u.role})));
//     }
    
//     // Password visibility toggle
//     const showPasswordBtn = document.getElementById('showPasswordBtn');
//     const passwordInput = document.getElementById('password');
    
//     if (showPasswordBtn && passwordInput) {
//         showPasswordBtn.addEventListener('click', function() {
//             const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
//             passwordInput.setAttribute('type', type);
//             this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
//         });
//     }
    
//     // Password strength monitoring
//     if (passwordInput) {
//         passwordInput.addEventListener('input', function() {
//             updatePasswordStrengthVisual(this.value);
//         });
//     }
    
//     // Tab switching
//     const loginTab = document.getElementById('loginTab');
//     const mfaTab = document.getElementById('mfaTab');
//     const loginForm = document.getElementById('loginForm');
//     const mfaForm = document.getElementById('mfaForm');
    
//     if (loginTab && mfaTab) {
//         loginTab.addEventListener('click', function() {
//             loginTab.classList.add('active');
//             mfaTab.classList.remove('active');
//             loginForm.classList.add('active');
//             mfaForm.classList.remove('active');
//         });
        
//         mfaTab.addEventListener('click', function() {
//             mfaTab.classList.add('active');
//             loginTab.classList.remove('active');
//             mfaForm.classList.add('active');
//             loginForm.classList.remove('active');
//         });
//     }
    
//     // Login form submission
//     const loginFormElement = document.getElementById('loginForm');
//     if (loginFormElement) {
//         loginFormElement.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             const email = document.getElementById('email').value;
//             const password = document.getElementById('password').value;
//             const remember = document.getElementById('remember').checked;
            
//             // Basic validation
//             if (!email || !password) {
//                 showNotification('Please fill in all fields', 'error');
//                 return;
//             }
            
//             // Show loading state
//             const submitBtn = this.querySelector('button[type="submit"]');
//             const originalText = submitBtn.innerHTML;
//             submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
//             submitBtn.disabled = true;
            
//             // Simulate API call delay
//             setTimeout(() => {
//                 const result = loginUser(email, password);
                
//                 if (result.success) {
//                     showNotification('Login successful! Redirecting to dashboard...', 'success');
                    
//                     // Switch to MFA tab if enabled
//                     if (loginTab && mfaTab) {
//                         loginTab.classList.remove('active');
//                         mfaTab.classList.add('active');
//                         loginForm.classList.remove('active');
//                         mfaForm.classList.add('active');
                        
//                         // Start MFA timer
//                         startMfaTimer();
                        
//                         // Simulate sending MFA code and display it
//                         simulateMfaCode(true);
//                     } else {
//                         // If no MFA, redirect directly
//                         setTimeout(() => {
//                             window.location.href = 'dashboard.html';
//                         }, 1500);
//                     }
//                 } else {
//                     showNotification(result.message || 'Login failed', 'error');
//                 }
                
//                 // Reset button
//                 submitBtn.innerHTML = originalText;
//                 submitBtn.disabled = false;
//             }, 1500);
//         });
//     }
    
//     // MFA form submission
//     const mfaFormElement = document.getElementById('mfaForm');
//     if (mfaFormElement) {
//         mfaFormElement.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             const mfaCode = document.getElementById('mfaCode').value;
            
//             if (!mfaCode || mfaCode.length !== 6) {
//                 showNotification('Please enter a valid 6-digit code', 'error');
//                 return;
//             }
            
//             // Check if the entered code matches the generated one
//             if (mfaCode === currentOtpCode) {
//                 showNotification('MFA verification successful!', 'success');
                
//                 setTimeout(() => {
//                     window.location.href = 'dashboard.html';
//                 }, 1000);
//             } else {
//                 showNotification('Invalid verification code. Please try again.', 'error');
//             }
//         });
//     }
    
//     // Forgot password link
//     const forgotPasswordLink = document.getElementById('forgotPasswordLink');
//     if (forgotPasswordLink) {
//         forgotPasswordLink.addEventListener('click', function(e) {
//             e.preventDefault();
//             showNotification('Password reset functionality would be implemented here', 'info');
//         });
//     }
    
//     // Resend MFA code
//     const resendMfaBtn = document.getElementById('resendMfaBtn');
//     if (resendMfaBtn) {
//         resendMfaBtn.addEventListener('click', function(e) {
//             e.preventDefault();
//             startMfaTimer();
//             simulateMfaCode(true);
//             showNotification('New verification code sent to your email', 'success');
//         });
//     }
// }

// // ===== MFA TIMER =====
// function startMfaTimer() {
//     let timeLeft = 120; // 2 minutes in seconds
//     const timerElement = document.getElementById('timer');
//     const mfaTimer = document.getElementById('mfaTimer');
    
//     if (!timerElement) return;
    
//     // Reset timer display
//     timerElement.textContent = '02:00';
//     if (mfaTimer) mfaTimer.style.color = '';
    
//     const timerInterval = setInterval(() => {
//         const minutes = Math.floor(timeLeft / 60);
//         const seconds = timeLeft % 60;
        
//         timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
//         if (timeLeft <= 30) {
//             if (mfaTimer) mfaTimer.style.color = '#dc3545'; // Red when time is running out
//         }
        
//         if (timeLeft <= 0) {
//             clearInterval(timerInterval);
//             timerElement.textContent = '00:00';
//             if (mfaTimer) mfaTimer.style.color = '#dc3545';
//         }
        
//         timeLeft--;
//     }, 1000);
// }

// function simulateMfaCode(showOnScreen = false) {
//     // Generate a 6-digit OTP code
//     currentOtpCode = Math.floor(100000 + Math.random() * 900000).toString();
    
//     // Log to console
//     console.log(`Demo MFA code: ${currentOtpCode}`);
    
//     // Display on screen if requested
//     if (showOnScreen) {
//         displayOtpOnScreen(currentOtpCode);
//     }
    
//     return currentOtpCode;
// }

// function displayOtpOnScreen(otpCode) {
//     // Remove any existing OTP display
//     const existingDisplay = document.querySelector('.otp-display-container');
//     if (existingDisplay) {
//         existingDisplay.remove();
//     }
    
//     // Create OTP display container
//     const otpDisplay = document.createElement('div');
//     otpDisplay.className = 'otp-display-container';
//     otpDisplay.innerHTML = `
//         <div class="otp-display">
//             <div class="otp-header">
//                 <i class="fas fa-key"></i>
//                 <h4>Your OTP Code</h4>
//             </div>
//             <div class="otp-code">
//                 <span class="otp-digit">${otpCode[0]}</span>
//                 <span class="otp-digit">${otpCode[1]}</span>
//                 <span class="otp-digit">${otpCode[2]}</span>
//                 <span class="otp-digit">${otpCode[3]}</span>
//                 <span class="otp-digit">${otpCode[4]}</span>
//                 <span class="otp-digit">${otpCode[5]}</span>
//             </div>
//             <div class="otp-instructions">
//                 <p><i class="fas fa-info-circle"></i> For demo purposes, this OTP is displayed here. In a real application, it would be sent to your email.</p>
//                 <p><i class="fas fa-clock"></i> This code expires in 2 minutes.</p>
//             </div>
//             <button class="btn btn-small copy-otp-btn">
//                 <i class="fas fa-copy"></i> Copy Code
//             </button>
//         </div>
//     `;
    
//     // Add to the MFA form
//     const mfaForm = document.getElementById('mfaForm');
//     if (mfaForm) {
//         // Insert after the MFA instructions
//         const mfaInstructions = mfaForm.querySelector('.mfa-instructions');
//         if (mfaInstructions) {
//             mfaInstructions.parentNode.insertBefore(otpDisplay, mfaInstructions.nextSibling);
//         } else {
//             mfaForm.insertBefore(otpDisplay, mfaForm.firstChild);
//         }
//     }
    
//     // Add copy functionality
//     const copyBtn = otpDisplay.querySelector('.copy-otp-btn');
//     if (copyBtn) {
//         copyBtn.addEventListener('click', function() {
//             navigator.clipboard.writeText(otpCode).then(() => {
//                 const originalText = this.innerHTML;
//                 this.innerHTML = '<i class="fas fa-check"></i> Copied!';
//                 this.classList.add('copied');
                
//                 setTimeout(() => {
//                     this.innerHTML = originalText;
//                     this.classList.remove('copied');
//                 }, 2000);
//             }).catch(err => {
//                 console.error('Failed to copy OTP:', err);
//                 showNotification('Failed to copy OTP code', 'error');
//             });
//         });
//     }
    
//     // Add CSS for OTP display if not already present
//     if (!document.getElementById('otp-display-styles')) {
//         const style = document.createElement('style');
//         style.id = 'otp-display-styles';
//         style.textContent = `
//             .otp-display-container {
//                 margin: 20px 0;
//                 animation: fadeIn 0.5s ease;
//             }
            
//             .otp-display {
//                 background: linear-gradient(135deg, #f0f7ff 0%, #e6f2ff 100%);
//                 border-radius: 12px;
//                 padding: 20px;
//                 border: 2px solid #2a5bd7;
//                 box-shadow: 0 4px 12px rgba(42, 91, 215, 0.15);
//             }
            
//             .otp-header {
//                 display: flex;
//                 align-items: center;
//                 gap: 10px;
//                 margin-bottom: 15px;
//                 color: #2a5bd7;
//             }
            
//             .otp-header i {
//                 font-size: 1.5rem;
//             }
            
//             .otp-header h4 {
//                 margin: 0;
//                 font-size: 1.1rem;
//             }
            
//             .otp-code {
//                 display: flex;
//                 justify-content: center;
//                 gap: 10px;
//                 margin: 20px 0;
//             }
            
//             .otp-digit {
//                 width: 50px;
//                 height: 60px;
//                 background: white;
//                 border-radius: 8px;
//                 display: flex;
//                 align-items: center;
//                 justify-content: center;
//                 font-size: 1.8rem;
//                 font-weight: bold;
//                 color: #2a5bd7;
//                 box-shadow: 0 2px 8px rgba(0,0,0,0.1);
//                 border: 2px solid #2a5bd7;
//                 font-family: 'Roboto Mono', monospace;
//             }
            
//             .otp-instructions {
//                 background-color: rgba(255, 255, 255, 0.8);
//                 border-radius: 8px;
//                 padding: 12px;
//                 margin: 15px 0;
//                 font-size: 0.9rem;
//                 color: #555;
//             }
            
//             .otp-instructions p {
//                 margin: 8px 0;
//                 display: flex;
//                 align-items: flex-start;
//                 gap: 10px;
//             }
            
//             .otp-instructions i {
//                 color: #2a5bd7;
//                 margin-top: 2px;
//             }
            
//             .copy-otp-btn {
//                 width: 100%;
//                 margin-top: 10px;
//                 background-color: #2a5bd7;
//                 color: white;
//                 border: none;
//                 transition: all 0.3s ease;
//             }
            
//             .copy-otp-btn:hover {
//                 background-color: #1e4ac4;
//                 transform: translateY(-2px);
//             }
            
//             .copy-otp-btn.copied {
//                 background-color: #28a745;
//             }
            
//             @keyframes fadeIn {
//                 from { opacity: 0; transform: translateY(-10px); }
//                 to { opacity: 1; transform: translateY(0); }
//             }
//         `;
//         document.head.appendChild(style);
//     }
// }

// // ===== SIGNUP PAGE INITIALIZATION =====
// function initSignupPage() {
//     // Multi-step form navigation
//     let currentStep = 1;
//     const totalSteps = 3;
    
//     // Step navigation buttons
//     const nextBtn1 = document.getElementById('nextBtn1');
//     const nextBtn2 = document.getElementById('nextBtn2');
//     const backBtn2 = document.getElementById('backBtn2');
//     const backBtn3 = document.getElementById('backBtn3');
//     const cancelBtn = document.getElementById('cancelBtn');
//     const submitBtn = document.getElementById('submitBtn');
    
//     // Form steps
//     const step1 = document.getElementById('step1');
//     const step2 = document.getElementById('step2');
//     const step3 = document.getElementById('step3');
//     const successMessage = document.getElementById('successMessage');
    
//     // Progress steps
//     const progressSteps = document.querySelectorAll('.progress-step');
    
//     // Form inputs
//     const fullNameInput = document.getElementById('fullName');
//     const emailInput = document.getElementById('email');
//     const departmentSelect = document.getElementById('department');
//     const roleSelect = document.getElementById('role');
//     const passwordInput = document.getElementById('password');
//     const confirmPasswordInput = document.getElementById('confirmPassword');
//     const enableMfaCheckbox = document.getElementById('enableMfa');
    
//     // Review fields
//     const reviewName = document.getElementById('reviewName');
//     const reviewEmail = document.getElementById('reviewEmail');
//     const reviewDept = document.getElementById('reviewDept');
//     const reviewRole = document.getElementById('reviewRole');
//     const reviewMfa = document.getElementById('reviewMfa');
    
//     // Password visibility toggle
//     const showPasswordBtn = document.getElementById('showPasswordBtn');
//     if (showPasswordBtn && passwordInput) {
//         showPasswordBtn.addEventListener('click', function() {
//             const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
//             passwordInput.setAttribute('type', type);
//             this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
//         });
//     }
    
//     // Password strength monitoring
//     if (passwordInput) {
//         passwordInput.addEventListener('input', function() {
//             updatePasswordStrengthVisual(this.value);
//             checkPasswordMatch();
//         });
//     }
    
//     // Confirm password match check
//     if (confirmPasswordInput) {
//         confirmPasswordInput.addEventListener('input', checkPasswordMatch);
//     }
    
//     function checkPasswordMatch() {
//         const password = passwordInput ? passwordInput.value : '';
//         const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';
//         const matchElement = document.getElementById('passwordMatch');
        
//         if (!matchElement) return;
        
//         if (confirmPassword === '') {
//             matchElement.textContent = '';
//             matchElement.className = 'validation-message';
//         } else if (password === confirmPassword) {
//             matchElement.textContent = '✓ Passwords match';
//             matchElement.className = 'validation-message valid';
//         } else {
//             matchElement.textContent = '✗ Passwords do not match';
//             matchElement.className = 'validation-message error';
//         }
//     }
    
//     // Step navigation functions
//     function goToStep(step) {
//         // Hide all steps
//         [step1, step2, step3, successMessage].forEach(step => {
//             if (step) step.style.display = 'none';
//         });
        
//         // Show current step
//         if (step === 1 && step1) step1.style.display = 'block';
//         if (step === 2 && step2) step2.style.display = 'block';
//         if (step === 3 && step3) step3.style.display = 'block';
//         if (step === 'success' && successMessage) successMessage.style.display = 'block';
        
//         // Update progress steps
//         progressSteps.forEach(progressStep => {
//             const stepNum = parseInt(progressStep.getAttribute('data-step'));
//             if (stepNum < step) {
//                 progressStep.classList.add('completed');
//                 progressStep.classList.add('active');
//             } else if (stepNum === step) {
//                 progressStep.classList.add('active');
//                 progressStep.classList.remove('completed');
//             } else {
//                 progressStep.classList.remove('active');
//                 progressStep.classList.remove('completed');
//             }
//         });
        
//         currentStep = step;
        
//         // Update review details if going to step 3
//         if (step === 3) {
//             updateReviewDetails();
//         }
//     }
    
//     function updateReviewDetails() {
//         if (reviewName && fullNameInput) reviewName.textContent = fullNameInput.value;
//         if (reviewEmail && emailInput) reviewEmail.textContent = emailInput.value;
//         if (reviewDept && departmentSelect) reviewDept.textContent = departmentSelect.options[departmentSelect.selectedIndex].text;
//         if (reviewRole && roleSelect) reviewRole.textContent = roleSelect.options[roleSelect.selectedIndex].text;
//         if (reviewMfa && enableMfaCheckbox) reviewMfa.textContent = enableMfaCheckbox.checked ? 'Yes' : 'No';
//     }
    
//     function validateStep1() {
//         if (!fullNameInput || !fullNameInput.value.trim()) {
//             showNotification('Please enter your full name', 'error');
//             return false;
//         }
        
//         if (!emailInput || !emailInput.value.trim()) {
//             showNotification('Please enter your email address', 'error');
//             return false;
//         }
        
//         // Basic email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(emailInput.value)) {
//             showNotification('Please enter a valid email address', 'error');
//             return false;
//         }
        
//         if (!departmentSelect || departmentSelect.value === '') {
//             showNotification('Please select your department', 'error');
//             return false;
//         }
        
//         if (!roleSelect || roleSelect.value === '') {
//             showNotification('Please select your role', 'error');
//             return false;
//         }
        
//         return true;
//     }
    
//     function validateStep2() {
//         if (!passwordInput || !passwordInput.value) {
//             showNotification('Please create a password', 'error');
//             return false;
//         }
        
//         // Check password strength
//         const strength = checkPasswordStrength(passwordInput.value);
//         if (strength < 3) {
//             showNotification('Please create a stronger password', 'error');
//             return false;
//         }
        
//         if (!confirmPasswordInput || !confirmPasswordInput.value) {
//             showNotification('Please confirm your password', 'error');
//             return false;
//         }
        
//         if (passwordInput.value !== confirmPasswordInput.value) {
//             showNotification('Passwords do not match', 'error');
//             return false;
//         }
        
//         const acceptTerms = document.getElementById('acceptTerms');
//         if (!acceptTerms || !acceptTerms.checked) {
//             showNotification('You must accept the terms and conditions', 'error');
//             return false;
//         }
        
//         return true;
//     }
    
//     // Event listeners for navigation buttons
//     if (nextBtn1) {
//         nextBtn1.addEventListener('click', function() {
//             if (validateStep1()) {
//                 goToStep(2);
//             }
//         });
//     }
    
//     if (nextBtn2) {
//         nextBtn2.addEventListener('click', function() {
//             if (validateStep2()) {
//                 goToStep(3);
//             }
//         });
//     }
    
//     if (backBtn2) {
//         backBtn2.addEventListener('click', function() {
//             goToStep(1);
//         });
//     }
    
//     if (backBtn3) {
//         backBtn3.addEventListener('click', function() {
//             goToStep(2);
//         });
//     }
    
//     if (cancelBtn) {
//         cancelBtn.addEventListener('click', function() {
//             if (confirm('Are you sure you want to cancel registration? All entered data will be lost.')) {
//                 window.location.href = 'index.html';
//             }
//         });
//     }
    
//     // Form submission
//     const signupForm = document.getElementById('signupForm');
//     if (signupForm && submitBtn) {
//         signupForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Collect all form data
//             const userData = {
//                 fullName: fullNameInput ? fullNameInput.value : '',
//                 email: emailInput ? emailInput.value : '',
//                 department: departmentSelect ? departmentSelect.value : '',
//                 role: roleSelect ? roleSelect.value : '',
//                 password: passwordInput ? passwordInput.value : '',
//                 enableMfa: enableMfaCheckbox ? enableMfaCheckbox.checked : false
//             };
            
//             // Show loading state
//             const originalText = submitBtn.innerHTML;
//             submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
//             submitBtn.disabled = true;
            
//             // Simulate API call delay
//             setTimeout(() => {
//                 const result = registerUser(userData);
                
//                 if (result.success) {
//                     showNotification('Account created successfully!', 'success');
//                     goToStep('success');
//                 } else {
//                     showNotification(result.message || 'Registration failed', 'error');
//                     submitBtn.innerHTML = originalText;
//                     submitBtn.disabled = false;
//                 }
//             }, 2000);
//         });
//     }
    
//     // Initialize with step 1
//     goToStep(1);
// }

// // ===== DASHBOARD INITIALIZATION =====
// function initDashboard() {
//     // Check authentication
//     if (!isLoggedIn) {
//         window.location.href = 'login.html';
//         return;
//     }
    
//     // Update user info
//     updateUserInfo();
    
//     // Update datetime
//     updateDateTime();
//     setInterval(updateDateTime, 1000);
    
//     // Initialize charts
//     initCharts();
    
//     // Setup event listeners
//     setupDashboardEvents();
    
//     // Load initial data
//     loadDashboardData();
// }

// function updateUserInfo() {
//     if (currentUser) {
//         const userNameElement = document.getElementById('userName');
//         const userRoleElement = document.getElementById('userRole');
        
//         if (userNameElement) userNameElement.textContent = currentUser.name;
//         if (userRoleElement) userRoleElement.textContent = currentUser.role;
//     }
// }

// function updateDateTime() {
//     const now = new Date();
//     const dateTimeElement = document.getElementById('currentDateTime');
    
//     if (dateTimeElement) {
//         const options = { 
//             weekday: 'long', 
//             year: 'numeric', 
//             month: 'long', 
//             day: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit',
//             second: '2-digit'
//         };
//         dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
//     }
// }

// function initCharts() {
//     // Initialize threat activity chart
//     const threatChartCanvas = document.getElementById('threatActivityChart');
    
//     if (threatChartCanvas) {
//         const ctx = threatChartCanvas.getContext('2d');
        
//         // Sample data
//         const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//         const threatData = [12, 19, 8, 15, 22, 18, 14];
//         const incidentData = [2, 5, 1, 3, 7, 4, 3];
        
//         new Chart(ctx, {
//             type: 'line',
//             data: {
//                 labels: days,
//                 datasets: [
//                     {
//                         label: 'Threat Events',
//                         data: threatData,
//                         borderColor: '#2a5bd7',
//                         backgroundColor: 'rgba(42, 91, 215, 0.1)',
//                         borderWidth: 2,
//                         fill: true,
//                         tension: 0.4
//                     },
//                     {
//                         label: 'Incidents',
//                         data: incidentData,
//                         borderColor: '#dc3545',
//                         backgroundColor: 'rgba(220, 53, 69, 0.1)',
//                         borderWidth: 2,
//                         fill: true,
//                         tension: 0.4
//                     }
//                 ]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                     legend: {
//                         position: 'top',
//                     },
//                     tooltip: {
//                         mode: 'index',
//                         intersect: false
//                     }
//                 },
//                 scales: {
//                     y: {
//                         beginAtZero: true,
//                         title: {
//                             display: true,
//                             text: 'Number of Events'
//                         }
//                     }
//                 }
//             }
//         });
//     }
// }

// function setupDashboardEvents() {
//     // Refresh button
//     const refreshBtn = document.getElementById('refreshBtn');
//     if (refreshBtn) {
//         refreshBtn.addEventListener('click', function() {
//             this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Refreshing...';
//             this.disabled = true;
            
//             setTimeout(() => {
//                 loadDashboardData();
//                 this.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
//                 this.disabled = false;
//                 showNotification('Dashboard data refreshed', 'success');
//             }, 1000);
//         });
//     }
    
//     // New report button
//     const newReportBtn = document.getElementById('newReportBtn');
//     if (newReportBtn) {
//         newReportBtn.addEventListener('click', function() {
//             showNotification('New incident report dialog would open here', 'info');
//         });
//     }
    
//     // Logout functionality
//     const logoutBtn = document.querySelector('a[href="index.html"]');
//     if (logoutBtn && logoutBtn.textContent.includes('Logout')) {
//         logoutBtn.addEventListener('click', function(e) {
//             e.preventDefault();
//             if (confirm('Are you sure you want to logout?')) {
//                 logoutUser();
//             }
//         });
//     }
    
//     // Time range filter
//     const timeRangeSelect = document.getElementById('timeRange');
//     if (timeRangeSelect) {
//         timeRangeSelect.addEventListener('change', function() {
//             showNotification(`Loading data for last ${this.value} days`, 'info');
//             // In a real app, this would reload chart data
//         });
//     }
// }

// function loadDashboardData() {
//     // In a real app, this would fetch data from an API
//     console.log('Loading dashboard data...');
    
//     // Update alert count
//     const alertCountElement = document.getElementById('alertCount');
//     if (alertCountElement) {
//         const randomCount = Math.floor(Math.random() * 5) + 1;
//         alertCountElement.textContent = randomCount;
        
//         // Update badge class based on count
//         if (randomCount === 0) {
//             alertCountElement.classList.remove('alert');
//         } else {
//             alertCountElement.classList.add('alert');
//         }
//     }
    
//     // Update broadcast status
//     const broadcastStatusElement = document.getElementById('broadcastStatus');
//     if (broadcastStatusElement) {
//         const statuses = ['All Online', '1 Warning', 'All Operational'];
//         const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
//         broadcastStatusElement.textContent = randomStatus;
//     }
    
//     // Update system uptime
//     const uptimeElement = document.getElementById('systemUptime');
//     if (uptimeElement) {
//         const uptime = (99.5 + Math.random() * 0.5).toFixed(1);
//         uptimeElement.textContent = `${uptime}%`;
//     }
// }

// // ===== NOTIFICATION SYSTEM =====
// function showNotification(message, type = 'info') {
//     // Create notification element
//     const notification = document.createElement('div');
//     notification.className = `notification notification-${type}`;
    
//     // Set icon based on type
//     let icon = 'info-circle';
//     if (type === 'success') icon = 'check-circle';
//     if (type === 'error') icon = 'exclamation-circle';
//     if (type === 'warning') icon = 'exclamation-triangle';
    
//     notification.innerHTML = `
//         <i class="fas fa-${icon}"></i>
//         <span>${message}</span>
//         <button class="notification-close"><i class="fas fa-times"></i></button>
//     `;
    
//     // Add to page
//     document.body.appendChild(notification);
    
//     // Add styles if not already present
//     if (!document.getElementById('notification-styles')) {
//         const style = document.createElement('style');
//         style.id = 'notification-styles';
//         style.textContent = `
//             .notification {
//                 position: fixed;
//                 top: 20px;
//                 right: 20px;
//                 padding: 15px 20px;
//                 border-radius: 8px;
//                 display: flex;
//                 align-items: center;
//                 gap: 15px;
//                 max-width: 400px;
//                 z-index: 9999;
//                 box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//                 animation: slideIn 0.3s ease;
//                 transform: translateX(0);
//             }
            
//             .notification-success {
//                 background-color: #d4edda;
//                 color: #155724;
//                 border-left: 4px solid #28a745;
//             }
            
//             .notification-error {
//                 background-color: #f8d7da;
//                 color: #721c24;
//                 border-left: 4px solid #dc3545;
//             }
            
//             .notification-warning {
//                 background-color: #fff3cd;
//                 color: #856404;
//                 border-left: 4px solid #ffc107;
//             }
            
//             .notification-info {
//                 background-color: #d1ecf1;
//                 color: #0c5460;
//                 border-left: 4px solid #17a2b8;
//             }
            
//             .notification-close {
//                 background: none;
//                 border: none;
//                 color: inherit;
//                 cursor: pointer;
//                 margin-left: auto;
//                 padding: 0;
//             }
            
//             @keyframes slideIn {
//                 from { transform: translateX(100%); }
//                 to { transform: translateX(0); }
//             }
//         `;
//         document.head.appendChild(style);
//     }
    
//     // Auto remove after 5 seconds
//     setTimeout(() => {
//         notification.style.transform = 'translateX(100%)';
//         setTimeout(() => {
//             if (notification.parentNode) {
//                 notification.parentNode.removeChild(notification);
//             }
//         }, 300);
//     }, 5000);
    
//     // Close button functionality
//     const closeBtn = notification.querySelector('.notification-close');
//     if (closeBtn) {
//         closeBtn.addEventListener('click', function() {
//             notification.style.transform = 'translateX(100%)';
//             setTimeout(() => {
//                 if (notification.parentNode) {
//                     notification.parentNode.removeChild(notification);
//                 }
//             }, 300);
//         });
//     }
// }

// // ===== UTILITY FUNCTIONS =====
// function formatDate(date) {
//     return new Date(date).toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric'
//     });
// }

// function formatTime(date) {
//     return new Date(date).toLocaleTimeString('en-US', {
//         hour: '2-digit',
//         minute: '2-digit'
//     });
// }

// // Export functions for use in other modules if needed
// window.sbcms = {
//     loginUser,
//     logoutUser,
//     registerUser,
//     showNotification,
//     checkAuthStatus
// };






// ===== GLOBAL VARIABLES =====
//let currentUser = null;
//let isLoggedIn = false;
//let currentOtpCode = null; // Store the current OTP code

// ===== DOM READY =====
// document.addEventListener('DOMContentLoaded', function() {
//     // Initialize based on current page
//     const currentPage = window.location.pathname.split('/').pop();
    
//     switch(currentPage) {
//         case 'index.html':
//         case '':
//             initHomePage();
//             break;
//         case 'login.html':
//             initLoginPage();
//             break;
//         case 'signup.html':
//             initSignupPage();
//             break;
//         case 'dashboard.html':
//             initDashboard();
//             break;
//     }
    
//     // Initialize mobile menu toggle
//     initMobileMenu();
    
//     // Check authentication status
//     checkAuthStatus();
// });

// // ===== MOBILE MENU =====
// function initMobileMenu() {
//     const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
//     const mainNav = document.querySelector('.main-nav');
    
//     if (mobileMenuBtn && mainNav) {
//         mobileMenuBtn.addEventListener('click', function() {
//             mainNav.classList.toggle('show');
//         });
//     }
// }

// // ===== AUTHENTICATION FUNCTIONS =====
// function checkAuthStatus() {
//     const authToken = localStorage.getItem('sbcms_auth_token');
//     const userData = localStorage.getItem('sbcms_user_data');
    
//     if (authToken && userData) {
//         isLoggedIn = true;
//         currentUser = JSON.parse(userData);
        
//         // Update global variables for immediate use
//         window.sbcms.isLoggedIn = isLoggedIn;
//         window.sbcms.currentUser = currentUser;
        
//         // Redirect from login/signup to dashboard if already logged in
//         const currentPage = window.location.pathname.split('/').pop();
//         if ((currentPage === 'login.html' || currentPage === 'signup.html' || currentPage === 'index.html') && isLoggedIn) {
//             window.location.href = 'dashboard.html';
//         }
//     } else {
//         // Update global variables
//         isLoggedIn = false;
//         currentUser = null;
//         window.sbcms.isLoggedIn = isLoggedIn;
//         window.sbcms.currentUser = currentUser;
        
//         // Redirect from dashboard to login if not authenticated
//         const currentPage = window.location.pathname.split('/').pop();
//         if (currentPage === 'dashboard.html' && !isLoggedIn) {
//             window.location.href = 'login.html';
//         }
//     }
// }

// function loginUser(email, password) {
//     // In a real application, this would be an API call
//     // For demo purposes, we'll simulate a login
    
//     // Check if user exists in localStorage
//     const users = JSON.parse(localStorage.getItem('sbcms_users')) || [];
//     const user = users.find(u => u.email === email);
    
//     if (!user) {
//         return { success: false, message: 'User not found' };
//     }
    
//     // In a real app, passwords would be hashed and compared server-side
//     // For demo, we're comparing plain text (not secure for production!)
//     if (user.password !== password) {
//         return { success: false, message: 'Invalid password' };
//     }
    
//     // Generate auth token (in real app, this would come from server)
//     const authToken = generateAuthToken();
    
//     // Store auth data
//     localStorage.setItem('sbcms_auth_token', authToken);
//     localStorage.setItem('sbcms_user_data', JSON.stringify({
//         id: user.id,
//         name: user.fullName,
//         email: user.email,
//         department: user.department,
//         role: user.role
//     }));
    
//     return { success: true, user: user };
// }

// function registerUser(userData) {
//     // In a real application, this would be an API call
    
//     // Check if user already exists
//     const users = JSON.parse(localStorage.getItem('sbcms_users')) || [];
//     const existingUser = users.find(u => u.email === userData.email);
    
//     if (existingUser) {
//         return { success: false, message: 'User with this email already exists' };
//     }
    
//     // Create new user
//     const newUser = {
//         id: generateUserId(),
//         ...userData,
//         createdAt: new Date().toISOString(),
//         isActive: true
//     };
    
//     users.push(newUser);
//     localStorage.setItem('sbcms_users', JSON.stringify(users));
    
//     return { success: true, user: newUser };
// }

// function logoutUser() {
//     localStorage.removeItem('sbcms_auth_token');
//     localStorage.removeItem('sbcms_user_data');
//     isLoggedIn = false;
//     currentUser = null;
//     window.location.href = 'index.html';
// }

// function generateAuthToken() {
//     return 'sbcms_' + Math.random().toString(36).substr(2) + Date.now().toString(36);
// }

// function generateUserId() {
//     return 'user_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
// }

// // ===== PASSWORD STRENGTH CHECKER =====
// function checkPasswordStrength(password) {
//     let strength = 0;
    
//     // Length check
//     if (password.length >= 8) strength++;
//     if (password.length >= 12) strength++;
    
//     // Character variety checks
//     if (/[A-Z]/.test(password)) strength++;
//     if (/[a-z]/.test(password)) strength++;
//     if (/[0-9]/.test(password)) strength++;
//     if (/[^A-Za-z0-9]/.test(password)) strength++;
    
//     // Cap at 5
//     return Math.min(strength, 5);
// }

// function updatePasswordStrengthVisual(password) {
//     const strength = checkPasswordStrength(password);
//     const strengthBar = document.getElementById('passwordStrength');
//     const strengthLabels = document.querySelectorAll('.strength-label');
    
//     if (strengthBar) {
//         const width = (strength / 5) * 100;
//         strengthBar.style.width = `${width}%`;
        
//         // Update color based on strength
//         if (strength <= 1) {
//             strengthBar.style.backgroundColor = '#dc3545'; // Red
//         } else if (strength <= 3) {
//             strengthBar.style.backgroundColor = '#ffc107'; // Yellow
//         } else {
//             strengthBar.style.backgroundColor = '#28a745'; // Green
//         }
//     }
    
//     // Update strength labels
//     strengthLabels.forEach((label, index) => {
//         if (index < strength) {
//             label.classList.add('active');
//         } else {
//             label.classList.remove('active');
//         }
//     });
    
//     // Update requirement checkmarks
//     updatePasswordRequirements(password);
// }

// function updatePasswordRequirements(password) {
//     const requirements = {
//         length: password.length >= 8,
//         uppercase: /[A-Z]/.test(password),
//         lowercase: /[a-z]/.test(password),
//         number: /[0-9]/.test(password),
//         special: /[^A-Za-z0-9]/.test(password)
//     };
    
//     // Update each requirement visual
//     Object.keys(requirements).forEach(req => {
//         const element = document.querySelector(`.req-${req}`);
//         if (element) {
//             if (requirements[req]) {
//                 element.classList.add('valid');
//             } else {
//                 element.classList.remove('valid');
//             }
//         }
//     });
// }

// // ===== HOME PAGE INITIALIZATION =====
// function initHomePage() {
//     // Add any home page specific initialization here
//     console.log('Home page initialized');
// }

// // ===== LOGIN PAGE INITIALIZATION =====
// function initLoginPage() {
//     // ADD PRE-CONFIGURED DEMO ACCOUNTS IF NONE EXIST
//     if (!localStorage.getItem('sbcms_users')) {
//         const demoUsers = [
//             {
//                 id: 'user_admin_001',
//                 fullName: 'System Administrator',
//                 email: 'admin@starrfm.com',
//                 password: 'Admin@2024', // This would be hashed in real app
//                 department: 'it_ot',
//                 role: 'admin',
//                 enableMfa: true,
//                 createdAt: new Date().toISOString(),
//                 isActive: true
//             },
//             {
//                 id: 'user_security_001',
//                 fullName: 'Security Analyst',
//                 email: 'analyst@starrfm.com',
//                 password: 'Analyst@2024',
//                 department: 'security',
//                 role: 'analyst',
//                 enableMfa: true,
//                 createdAt: new Date().toISOString(),
//                 isActive: true
//             },
//             {
//                 id: 'user_broadcast_001',
//                 fullName: 'Broadcast Engineer',
//                 email: 'engineer@starrfm.com',
//                 password: 'Engineer@2024',
//                 department: 'broadcast',
//                 role: 'broadcaster',
//                 enableMfa: false,
//                 createdAt: new Date().toISOString(),
//                 isActive: true
//             }
//         ];
//         localStorage.setItem('sbcms_users', JSON.stringify(demoUsers));
//         console.log('Demo accounts created:', demoUsers.map(u => ({email: u.email, role: u.role})));
//     }
    
//     // Password visibility toggle
//     const showPasswordBtn = document.getElementById('showPasswordBtn');
//     const passwordInput = document.getElementById('password');
    
//     if (showPasswordBtn && passwordInput) {
//         showPasswordBtn.addEventListener('click', function() {
//             const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
//             passwordInput.setAttribute('type', type);
//             this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
//         });
//     }
    
//     // Password strength monitoring
//     if (passwordInput) {
//         passwordInput.addEventListener('input', function() {
//             updatePasswordStrengthVisual(this.value);
//         });
//     }
    
//     // Tab switching
//     const loginTab = document.getElementById('loginTab');
//     const mfaTab = document.getElementById('mfaTab');
//     const loginForm = document.getElementById('loginForm');
//     const mfaForm = document.getElementById('mfaForm');
    
//     if (loginTab && mfaTab) {
//         loginTab.addEventListener('click', function() {
//             loginTab.classList.add('active');
//             mfaTab.classList.remove('active');
//             loginForm.classList.add('active');
//             mfaForm.classList.remove('active');
//         });
        
//         mfaTab.addEventListener('click', function() {
//             mfaTab.classList.add('active');
//             loginTab.classList.remove('active');
//             mfaForm.classList.add('active');
//             loginForm.classList.remove('active');
//         });
//     }
    
//     // Login form submission
//     const loginFormElement = document.getElementById('loginForm');
//     if (loginFormElement) {
//         loginFormElement.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             const email = document.getElementById('email').value;
//             const password = document.getElementById('password').value;
//             const remember = document.getElementById('remember').checked;
            
//             // Basic validation
//             if (!email || !password) {
//                 showNotification('Please fill in all fields', 'error');
//                 return;
//             }
            
//             // Show loading state
//             const submitBtn = this.querySelector('button[type="submit"]');
//             const originalText = submitBtn.innerHTML;
//             submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
//             submitBtn.disabled = true;
            
//             // Simulate API call delay
//             setTimeout(() => {
//                 const result = loginUser(email, password);
                
//                 if (result.success) {
//                     showNotification('Login successful!', 'success');
                    
//                     // Switch to MFA tab if enabled
//                     if (loginTab && mfaTab) {
//                         loginTab.classList.remove('active');
//                         mfaTab.classList.add('active');
//                         loginForm.classList.remove('active');
//                         mfaForm.classList.add('active');
                        
//                         // Start MFA timer
//                         startMfaTimer();
                        
//                         // Simulate sending MFA code and display it
//                         simulateMfaCode(true);
//                     } else {
//                         // If no MFA, redirect directly
//                         setTimeout(() => {
//                             window.location.href = 'dashboard.html';
//                         }, 1500);
//                     }
//                 } else {
//                     showNotification(result.message || 'Login failed', 'error');
//                 }
                
//                 // Reset button
//                 submitBtn.innerHTML = originalText;
//                 submitBtn.disabled = false;
//             }, 1500);
//         });
//     }
    
//     // MFA form submission
//     const mfaFormElement = document.getElementById('mfaForm');
//     if (mfaFormElement) {
//         mfaFormElement.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             const mfaCode = document.getElementById('mfaCode').value;
            
//             if (!mfaCode || mfaCode.length !== 6) {
//                 showNotification('Please enter a valid 6-digit code', 'error');
//                 return;
//             }
            
//             // Check if the entered code matches the generated one
//             if (mfaCode === currentOtpCode) {
//                 showNotification('MFA verification successful! Redirecting to dashboard...', 'success');
                
//                 // Ensure authentication data is properly set
//                 const userData = localStorage.getItem('sbcms_user_data');
//                 if (userData) {
//                     currentUser = JSON.parse(userData);
//                     isLoggedIn = true;
                    
//                     // Force update global variables
//                     window.sbcms.isLoggedIn = isLoggedIn;
//                     window.sbcms.currentUser = currentUser;
//                 }
                
//                 // Add a small delay to ensure everything is properly set
//                 setTimeout(() => {
//                     window.location.href = 'dashboard.html';
//                 }, 1000);
//             } else {
//                 showNotification('Invalid verification code. Please try again.', 'error');
//             }
//         });
//     }
    
//     // Forgot password link
//     const forgotPasswordLink = document.getElementById('forgotPasswordLink');
//     if (forgotPasswordLink) {
//         forgotPasswordLink.addEventListener('click', function(e) {
//             e.preventDefault();
//             showNotification('Password reset functionality would be implemented here', 'info');
//         });
//     }
    
//     // Resend MFA code
//     const resendMfaBtn = document.getElementById('resendMfaBtn');
//     if (resendMfaBtn) {
//         resendMfaBtn.addEventListener('click', function(e) {
//             e.preventDefault();
//             startMfaTimer();
//             simulateMfaCode(true);
//             showNotification('New verification code sent to your email', 'success');
//         });
//     }
// }

// // ===== MFA TIMER =====
// function startMfaTimer() {
//     let timeLeft = 120; // 2 minutes in seconds
//     const timerElement = document.getElementById('timer');
//     const mfaTimer = document.getElementById('mfaTimer');
    
//     if (!timerElement) return;
    
//     // Reset timer display
//     timerElement.textContent = '02:00';
//     if (mfaTimer) mfaTimer.style.color = '';
    
//     const timerInterval = setInterval(() => {
//         const minutes = Math.floor(timeLeft / 60);
//         const seconds = timeLeft % 60;
        
//         timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
//         if (timeLeft <= 30) {
//             if (mfaTimer) mfaTimer.style.color = '#dc3545'; // Red when time is running out
//         }
        
//         if (timeLeft <= 0) {
//             clearInterval(timerInterval);
//             timerElement.textContent = '00:00';
//             if (mfaTimer) mfaTimer.style.color = '#dc3545';
//         }
        
//         timeLeft--;
//     }, 1000);
// }

// function simulateMfaCode(showOnScreen = false) {
//     // Generate a 6-digit OTP code
//     currentOtpCode = Math.floor(100000 + Math.random() * 900000).toString();
    
//     // Log to console
//     console.log(`Demo MFA code: ${currentOtpCode}`);
    
//     // Display on screen if requested
//     if (showOnScreen) {
//         displayOtpOnScreen(currentOtpCode);
//     }
    
//     return currentOtpCode;
// }

// function displayOtpOnScreen(otpCode) {
//     // Remove any existing OTP display
//     const existingDisplay = document.querySelector('.otp-display-container');
//     if (existingDisplay) {
//         existingDisplay.remove();
//     }
    
//     // Create OTP display container
//     const otpDisplay = document.createElement('div');
//     otpDisplay.className = 'otp-display-container';
//     otpDisplay.innerHTML = `
//         <div class="otp-display">
//             <div class="otp-header">
//                 <i class="fas fa-key"></i>
//                 <h4>Your OTP Code</h4>
//             </div>
//             <div class="otp-code">
//                 <span class="otp-digit">${otpCode[0]}</span>
//                 <span class="otp-digit">${otpCode[1]}</span>
//                 <span class="otp-digit">${otpCode[2]}</span>
//                 <span class="otp-digit">${otpCode[3]}</span>
//                 <span class="otp-digit">${otpCode[4]}</span>
//                 <span class="otp-digit">${otpCode[5]}</span>
//             </div>
//             <div class="otp-instructions">
//                 <p><i class="fas fa-info-circle"></i> For demo purposes, this OTP is displayed here. In a real application, it would be sent to your email.</p>
//                 <p><i class="fas fa-clock"></i> This code expires in 2 minutes.</p>
//             </div>
//             <button class="btn btn-small copy-otp-btn">
//                 <i class="fas fa-copy"></i> Copy Code
//             </button>
//         </div>
//     `;
    
//     // Add to the MFA form
//     const mfaForm = document.getElementById('mfaForm');
//     if (mfaForm) {
//         // Insert after the MFA instructions
//         const mfaInstructions = mfaForm.querySelector('.mfa-instructions');
//         if (mfaInstructions) {
//             mfaInstructions.parentNode.insertBefore(otpDisplay, mfaInstructions.nextSibling);
//         } else {
//             mfaForm.insertBefore(otpDisplay, mfaForm.firstChild);
//         }
//     }
    
//     // Add copy functionality
//     const copyBtn = otpDisplay.querySelector('.copy-otp-btn');
//     if (copyBtn) {
//         copyBtn.addEventListener('click', function() {
//             navigator.clipboard.writeText(otpCode).then(() => {
//                 const originalText = this.innerHTML;
//                 this.innerHTML = '<i class="fas fa-check"></i> Copied!';
//                 this.classList.add('copied');
                
//                 setTimeout(() => {
//                     this.innerHTML = originalText;
//                     this.classList.remove('copied');
//                 }, 2000);
//             }).catch(err => {
//                 console.error('Failed to copy OTP:', err);
//                 showNotification('Failed to copy OTP code', 'error');
//             });
//         });
//     }
    
//     // Add CSS for OTP display if not already present
//     if (!document.getElementById('otp-display-styles')) {
//         const style = document.createElement('style');
//         style.id = 'otp-display-styles';
//         style.textContent = `
//             .otp-display-container {
//                 margin: 20px 0;
//                 animation: fadeIn 0.5s ease;
//             }
            
//             .otp-display {
//                 background: linear-gradient(135deg, #f0f7ff 0%, #e6f2ff 100%);
//                 border-radius: 12px;
//                 padding: 20px;
//                 border: 2px solid #2a5bd7;
//                 box-shadow: 0 4px 12px rgba(42, 91, 215, 0.15);
//             }
            
//             .otp-header {
//                 display: flex;
//                 align-items: center;
//                 gap: 10px;
//                 margin-bottom: 15px;
//                 color: #2a5bd7;
//             }
            
//             .otp-header i {
//                 font-size: 1.5rem;
//             }
            
//             .otp-header h4 {
//                 margin: 0;
//                 font-size: 1.1rem;
//             }
            
//             .otp-code {
//                 display: flex;
//                 justify-content: center;
//                 gap: 10px;
//                 margin: 20px 0;
//             }
            
//             .otp-digit {
//                 width: 50px;
//                 height: 60px;
//                 background: white;
//                 border-radius: 8px;
//                 display: flex;
//                 align-items: center;
//                 justify-content: center;
//                 font-size: 1.8rem;
//                 font-weight: bold;
//                 color: #2a5bd7;
//                 box-shadow: 0 2px 8px rgba(0,0,0,0.1);
//                 border: 2px solid #2a5bd7;
//                 font-family: 'Roboto Mono', monospace;
//             }
            
//             .otp-instructions {
//                 background-color: rgba(255, 255, 255, 0.8);
//                 border-radius: 8px;
//                 padding: 12px;
//                 margin: 15px 0;
//                 font-size: 0.9rem;
//                 color: #555;
//             }
            
//             .otp-instructions p {
//                 margin: 8px 0;
//                 display: flex;
//                 align-items: flex-start;
//                 gap: 10px;
//             }
            
//             .otp-instructions i {
//                 color: #2a5bd7;
//                 margin-top: 2px;
//             }
            
//             .copy-otp-btn {
//                 width: 100%;
//                 margin-top: 10px;
//                 background-color: #2a5bd7;
//                 color: white;
//                 border: none;
//                 transition: all 0.3s ease;
//             }
            
//             .copy-otp-btn:hover {
//                 background-color: #1e4ac4;
//                 transform: translateY(-2px);
//             }
            
//             .copy-otp-btn.copied {
//                 background-color: #28a745;
//             }
            
//             @keyframes fadeIn {
//                 from { opacity: 0; transform: translateY(-10px); }
//                 to { opacity: 1; transform: translateY(0); }
//             }
//         `;
//         document.head.appendChild(style);
//     }
// }

// // ===== SIGNUP PAGE INITIALIZATION =====
// function initSignupPage() {
//     // Multi-step form navigation
//     let currentStep = 1;
//     const totalSteps = 3;
    
//     // Step navigation buttons
//     const nextBtn1 = document.getElementById('nextBtn1');
//     const nextBtn2 = document.getElementById('nextBtn2');
//     const backBtn2 = document.getElementById('backBtn2');
//     const backBtn3 = document.getElementById('backBtn3');
//     const cancelBtn = document.getElementById('cancelBtn');
//     const submitBtn = document.getElementById('submitBtn');
    
//     // Form steps
//     const step1 = document.getElementById('step1');
//     const step2 = document.getElementById('step2');
//     const step3 = document.getElementById('step3');
//     const successMessage = document.getElementById('successMessage');
    
//     // Progress steps
//     const progressSteps = document.querySelectorAll('.progress-step');
    
//     // Form inputs
//     const fullNameInput = document.getElementById('fullName');
//     const emailInput = document.getElementById('email');
//     const departmentSelect = document.getElementById('department');
//     const roleSelect = document.getElementById('role');
//     const passwordInput = document.getElementById('password');
//     const confirmPasswordInput = document.getElementById('confirmPassword');
//     const enableMfaCheckbox = document.getElementById('enableMfa');
    
//     // Review fields
//     const reviewName = document.getElementById('reviewName');
//     const reviewEmail = document.getElementById('reviewEmail');
//     const reviewDept = document.getElementById('reviewDept');
//     const reviewRole = document.getElementById('reviewRole');
//     const reviewMfa = document.getElementById('reviewMfa');
    
//     // Password visibility toggle
//     const showPasswordBtn = document.getElementById('showPasswordBtn');
//     if (showPasswordBtn && passwordInput) {
//         showPasswordBtn.addEventListener('click', function() {
//             const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
//             passwordInput.setAttribute('type', type);
//             this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
//         });
//     }
    
//     // Password strength monitoring
//     if (passwordInput) {
//         passwordInput.addEventListener('input', function() {
//             updatePasswordStrengthVisual(this.value);
//             checkPasswordMatch();
//         });
//     }
    
//     // Confirm password match check
//     if (confirmPasswordInput) {
//         confirmPasswordInput.addEventListener('input', checkPasswordMatch);
//     }
    
//     function checkPasswordMatch() {
//         const password = passwordInput ? passwordInput.value : '';
//         const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';
//         const matchElement = document.getElementById('passwordMatch');
        
//         if (!matchElement) return;
        
//         if (confirmPassword === '') {
//             matchElement.textContent = '';
//             matchElement.className = 'validation-message';
//         } else if (password === confirmPassword) {
//             matchElement.textContent = '✓ Passwords match';
//             matchElement.className = 'validation-message valid';
//         } else {
//             matchElement.textContent = '✗ Passwords do not match';
//             matchElement.className = 'validation-message error';
//         }
//     }
    
//     // Step navigation functions
//     function goToStep(step) {
//         // Hide all steps
//         [step1, step2, step3, successMessage].forEach(step => {
//             if (step) step.style.display = 'none';
//         });
        
//         // Show current step
//         if (step === 1 && step1) step1.style.display = 'block';
//         if (step === 2 && step2) step2.style.display = 'block';
//         if (step === 3 && step3) step3.style.display = 'block';
//         if (step === 'success' && successMessage) successMessage.style.display = 'block';
        
//         // Update progress steps
//         progressSteps.forEach(progressStep => {
//             const stepNum = parseInt(progressStep.getAttribute('data-step'));
//             if (stepNum < step) {
//                 progressStep.classList.add('completed');
//                 progressStep.classList.add('active');
//             } else if (stepNum === step) {
//                 progressStep.classList.add('active');
//                 progressStep.classList.remove('completed');
//             } else {
//                 progressStep.classList.remove('active');
//                 progressStep.classList.remove('completed');
//             }
//         });
        
//         currentStep = step;
        
//         // Update review details if going to step 3
//         if (step === 3) {
//             updateReviewDetails();
//         }
//     }
    
//     function updateReviewDetails() {
//         if (reviewName && fullNameInput) reviewName.textContent = fullNameInput.value;
//         if (reviewEmail && emailInput) reviewEmail.textContent = emailInput.value;
//         if (reviewDept && departmentSelect) reviewDept.textContent = departmentSelect.options[departmentSelect.selectedIndex].text;
//         if (reviewRole && roleSelect) reviewRole.textContent = roleSelect.options[roleSelect.selectedIndex].text;
//         if (reviewMfa && enableMfaCheckbox) reviewMfa.textContent = enableMfaCheckbox.checked ? 'Yes' : 'No';
//     }
    
//     function validateStep1() {
//         if (!fullNameInput || !fullNameInput.value.trim()) {
//             showNotification('Please enter your full name', 'error');
//             return false;
//         }
        
//         if (!emailInput || !emailInput.value.trim()) {
//             showNotification('Please enter your email address', 'error');
//             return false;
//         }
        
//         // Basic email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(emailInput.value)) {
//             showNotification('Please enter a valid email address', 'error');
//             return false;
//         }
        
//         if (!departmentSelect || departmentSelect.value === '') {
//             showNotification('Please select your department', 'error');
//             return false;
//         }
        
//         if (!roleSelect || roleSelect.value === '') {
//             showNotification('Please select your role', 'error');
//             return false;
//         }
        
//         return true;
//     }
    
//     function validateStep2() {
//         if (!passwordInput || !passwordInput.value) {
//             showNotification('Please create a password', 'error');
//             return false;
//         }
        
//         // Check password strength
//         const strength = checkPasswordStrength(passwordInput.value);
//         if (strength < 3) {
//             showNotification('Please create a stronger password', 'error');
//             return false;
//         }
        
//         if (!confirmPasswordInput || !confirmPasswordInput.value) {
//             showNotification('Please confirm your password', 'error');
//             return false;
//         }
        
//         if (passwordInput.value !== confirmPasswordInput.value) {
//             showNotification('Passwords do not match', 'error');
//             return false;
//         }
        
//         const acceptTerms = document.getElementById('acceptTerms');
//         if (!acceptTerms || !acceptTerms.checked) {
//             showNotification('You must accept the terms and conditions', 'error');
//             return false;
//         }
        
//         return true;
//     }
    
//     // Event listeners for navigation buttons
//     if (nextBtn1) {
//         nextBtn1.addEventListener('click', function() {
//             if (validateStep1()) {
//                 goToStep(2);
//             }
//         });
//     }
    
//     if (nextBtn2) {
//         nextBtn2.addEventListener('click', function() {
//             if (validateStep2()) {
//                 goToStep(3);
//             }
//         });
//     }
    
//     if (backBtn2) {
//         backBtn2.addEventListener('click', function() {
//             goToStep(1);
//         });
//     }
    
//     if (backBtn3) {
//         backBtn3.addEventListener('click', function() {
//             goToStep(2);
//         });
//     }
    
//     if (cancelBtn) {
//         cancelBtn.addEventListener('click', function() {
//             if (confirm('Are you sure you want to cancel registration? All entered data will be lost.')) {
//                 window.location.href = 'index.html';
//             }
//         });
//     }
    
//     // Form submission
//     const signupForm = document.getElementById('signupForm');
//     if (signupForm && submitBtn) {
//         signupForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Collect all form data
//             const userData = {
//                 fullName: fullNameInput ? fullNameInput.value : '',
//                 email: emailInput ? emailInput.value : '',
//                 department: departmentSelect ? departmentSelect.value : '',
//                 role: roleSelect ? roleSelect.value : '',
//                 password: passwordInput ? passwordInput.value : '',
//                 enableMfa: enableMfaCheckbox ? enableMfaCheckbox.checked : false
//             };
            
//             // Show loading state
//             const originalText = submitBtn.innerHTML;
//             submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
//             submitBtn.disabled = true;
            
//             // Simulate API call delay
//             setTimeout(() => {
//                 const result = registerUser(userData);
                
//                 if (result.success) {
//                     showNotification('Account created successfully!', 'success');
//                     goToStep('success');
//                 } else {
//                     showNotification(result.message || 'Registration failed', 'error');
//                     submitBtn.innerHTML = originalText;
//                     submitBtn.disabled = false;
//                 }
//             }, 2000);
//         });
//     }
    
//     // Initialize with step 1
//     goToStep(1);
// }

// // ===== DASHBOARD INITIALIZATION =====
// function initDashboard() {
//     console.log('Initializing dashboard...');
    
//     // Check authentication by looking directly at localStorage
//     const authToken = localStorage.getItem('sbcms_auth_token');
//     const userData = localStorage.getItem('sbcms_user_data');
    
//     console.log('Auth token exists:', !!authToken);
//     console.log('User data exists:', !!userData);
    
//     if (!authToken || !userData) {
//         console.log('Not authenticated, redirecting to login...');
//         window.location.href = 'login.html';
//         return;
//     }
    
//     // Update global variables
//     isLoggedIn = true;
//     currentUser = JSON.parse(userData);
//     console.log('User authenticated:', currentUser.email);
    
//     // Update user info
//     updateUserInfo();
    
//     // Update datetime
//     updateDateTime();
//     setInterval(updateDateTime, 1000);
    
//     // Initialize charts
//     initCharts();
    
//     // Setup event listeners
//     setupDashboardEvents();
    
//     // Load initial data
//     loadDashboardData();
    
//     // Show welcome notification
//     setTimeout(() => {
//         showNotification(`Welcome back, ${currentUser.name}!`, 'success');
//     }, 500);
// }

// function updateUserInfo() {
//     if (currentUser) {
//         const userNameElement = document.getElementById('userName');
//         const userRoleElement = document.getElementById('userRole');
        
//         if (userNameElement) userNameElement.textContent = currentUser.name;
//         if (userRoleElement) userRoleElement.textContent = currentUser.role;
//     }
// }

// function updateDateTime() {
//     const now = new Date();
//     const dateTimeElement = document.getElementById('currentDateTime');
    
//     if (dateTimeElement) {
//         const options = { 
//             weekday: 'long', 
//             year: 'numeric', 
//             month: 'long', 
//             day: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit',
//             second: '2-digit'
//         };
//         dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
//     }
// }

// function initCharts() {
//     // Initialize threat activity chart
//     const threatChartCanvas = document.getElementById('threatActivityChart');
    
//     if (threatChartCanvas) {
//         const ctx = threatChartCanvas.getContext('2d');
        
//         // Sample data
//         const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//         const threatData = [12, 19, 8, 15, 22, 18, 14];
//         const incidentData = [2, 5, 1, 3, 7, 4, 3];
        
//         new Chart(ctx, {
//             type: 'line',
//             data: {
//                 labels: days,
//                 datasets: [
//                     {
//                         label: 'Threat Events',
//                         data: threatData,
//                         borderColor: '#2a5bd7',
//                         backgroundColor: 'rgba(42, 91, 215, 0.1)',
//                         borderWidth: 2,
//                         fill: true,
//                         tension: 0.4
//                     },
//                     {
//                         label: 'Incidents',
//                         data: incidentData,
//                         borderColor: '#dc3545',
//                         backgroundColor: 'rgba(220, 53, 69, 0.1)',
//                         borderWidth: 2,
//                         fill: true,
//                         tension: 0.4
//                     }
//                 ]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                     legend: {
//                         position: 'top',
//                     },
//                     tooltip: {
//                         mode: 'index',
//                         intersect: false
//                     }
//                 },
//                 scales: {
//                     y: {
//                         beginAtZero: true,
//                         title: {
//                             display: true,
//                             text: 'Number of Events'
//                         }
//                     }
//                 }
//             }
//         });
//     }
// }

// function setupDashboardEvents() {
//     // Refresh button
//     const refreshBtn = document.getElementById('refreshBtn');
//     if (refreshBtn) {
//         refreshBtn.addEventListener('click', function() {
//             this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Refreshing...';
//             this.disabled = true;
            
//             setTimeout(() => {
//                 loadDashboardData();
//                 this.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
//                 this.disabled = false;
//                 showNotification('Dashboard data refreshed', 'success');
//             }, 1000);
//         });
//     }
    
//     // New report button
//     const newReportBtn = document.getElementById('newReportBtn');
//     if (newReportBtn) {
//         newReportBtn.addEventListener('click', function() {
//             showNotification('New incident report dialog would open here', 'info');
//         });
//     }
    
//     // Logout functionality
//     const logoutBtn = document.querySelector('a[href="index.html"]');
//     if (logoutBtn && logoutBtn.textContent.includes('Logout')) {
//         logoutBtn.addEventListener('click', function(e) {
//             e.preventDefault();
//             if (confirm('Are you sure you want to logout?')) {
//                 logoutUser();
//             }
//         });
//     }
    
//     // Time range filter
//     const timeRangeSelect = document.getElementById('timeRange');
//     if (timeRangeSelect) {
//         timeRangeSelect.addEventListener('change', function() {
//             showNotification(`Loading data for last ${this.value} days`, 'info');
//             // In a real app, this would reload chart data
//         });
//     }
// }

// function loadDashboardData() {
//     // In a real app, this would fetch data from an API
//     console.log('Loading dashboard data...');
    
//     // Update alert count
//     const alertCountElement = document.getElementById('alertCount');
//     if (alertCountElement) {
//         const randomCount = Math.floor(Math.random() * 5) + 1;
//         alertCountElement.textContent = randomCount;
        
//         // Update badge class based on count
//         if (randomCount === 0) {
//             alertCountElement.classList.remove('alert');
//         } else {
//             alertCountElement.classList.add('alert');
//         }
//     }
    
//     // Update broadcast status
//     const broadcastStatusElement = document.getElementById('broadcastStatus');
//     if (broadcastStatusElement) {
//         const statuses = ['All Online', '1 Warning', 'All Operational'];
//         const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
//         broadcastStatusElement.textContent = randomStatus;
//     }
    
//     // Update system uptime
//     const uptimeElement = document.getElementById('systemUptime');
//     if (uptimeElement) {
//         const uptime = (99.5 + Math.random() * 0.5).toFixed(1);
//         uptimeElement.textContent = `${uptime}%`;
//     }
// }

// // ===== NOTIFICATION SYSTEM =====
// function showNotification(message, type = 'info') {
//     // Create notification element
//     const notification = document.createElement('div');
//     notification.className = `notification notification-${type}`;
    
//     // Set icon based on type
//     let icon = 'info-circle';
//     if (type === 'success') icon = 'check-circle';
//     if (type === 'error') icon = 'exclamation-circle';
//     if (type === 'warning') icon = 'exclamation-triangle';
    
//     notification.innerHTML = `
//         <i class="fas fa-${icon}"></i>
//         <span>${message}</span>
//         <button class="notification-close"><i class="fas fa-times"></i></button>
//     `;
    
//     // Add to page
//     document.body.appendChild(notification);
    
//     // Add styles if not already present
//     if (!document.getElementById('notification-styles')) {
//         const style = document.createElement('style');
//         style.id = 'notification-styles';
//         style.textContent = `
//             .notification {
//                 position: fixed;
//                 top: 20px;
//                 right: 20px;
//                 padding: 15px 20px;
//                 border-radius: 8px;
//                 display: flex;
//                 align-items: center;
//                 gap: 15px;
//                 max-width: 400px;
//                 z-index: 9999;
//                 box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//                 animation: slideIn 0.3s ease;
//                 transform: translateX(0);
//             }
            
//             .notification-success {
//                 background-color: #d4edda;
//                 color: #155724;
//                 border-left: 4px solid #28a745;
//             }
            
//             .notification-error {
//                 background-color: #f8d7da;
//                 color: #721c24;
//                 border-left: 4px solid #dc3545;
//             }
            
//             .notification-warning {
//                 background-color: #fff3cd;
//                 color: #856404;
//                 border-left: 4px solid #ffc107;
//             }
            
//             .notification-info {
//                 background-color: #d1ecf1;
//                 color: #0c5460;
//                 border-left: 4px solid #17a2b8;
//             }
            
//             .notification-close {
//                 background: none;
//                 border: none;
//                 color: inherit;
//                 cursor: pointer;
//                 margin-left: auto;
//                 padding: 0;
//             }
            
//             @keyframes slideIn {
//                 from { transform: translateX(100%); }
//                 to { transform: translateX(0); }
//             }
//         `;
//         document.head.appendChild(style);
//     }
    
//     // Auto remove after 5 seconds
//     setTimeout(() => {
//         notification.style.transform = 'translateX(100%)';
//         setTimeout(() => {
//             if (notification.parentNode) {
//                 notification.parentNode.removeChild(notification);
//             }
//         }, 300);
//     }, 5000);
    
//     // Close button functionality
//     const closeBtn = notification.querySelector('.notification-close');
//     if (closeBtn) {
//         closeBtn.addEventListener('click', function() {
//             notification.style.transform = 'translateX(100%)';
//             setTimeout(() => {
//                 if (notification.parentNode) {
//                     notification.parentNode.removeChild(notification);
//                 }
//             }, 300);
//         });
//     }
// }

// // ===== UTILITY FUNCTIONS =====
// function formatDate(date) {
//     return new Date(date).toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric'
//     });
// }

// function formatTime(date) {
//     return new Date(date).toLocaleTimeString('en-US', {
//         hour: '2-digit',
//         minute: '2-digit'
//     });
// }

// // Export functions and variables for use in other modules if needed
// window.sbcms = {
//     loginUser,
//     logoutUser,
//     registerUser,
//     showNotification,
//     checkAuthStatus,
//     isLoggedIn,
//     currentUser
// };





// ===== GLOBAL VARIABLES =====
let currentUser = null;
let isLoggedIn = false;
let currentOtpCode = null; // Store the current OTP code
let threatChart = null; // Chart instance
let activeSection = 'dashboard'; // Current active section

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize based on current page
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'index.html':
        case '':
            initHomePage();
            break;
        case 'login.html':
            initLoginPage();
            break;
        case 'signup.html':
            initSignupPage();
            break;
        case 'dashboard.html':
            initDashboard();
            break;
    }
    
    // Initialize mobile menu toggle
    initMobileMenu();
    
    // Check authentication status
    checkAuthStatus();
});

// ===== MOBILE MENU =====
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('show');
        });
    }
}

// ===== AUTHENTICATION FUNCTIONS =====
function checkAuthStatus() {
    const authToken = localStorage.getItem('sbcms_auth_token');
    const userData = localStorage.getItem('sbcms_user_data');
    
    if (authToken && userData) {
        isLoggedIn = true;
        currentUser = JSON.parse(userData);
        
        // Update global variables for immediate use
        window.sbcms.isLoggedIn = isLoggedIn;
        window.sbcms.currentUser = currentUser;
        
        // Redirect from login/signup to dashboard if already logged in
        const currentPage = window.location.pathname.split('/').pop();
        if ((currentPage === 'login.html' || currentPage === 'signup.html' || currentPage === 'index.html') && isLoggedIn) {
            window.location.href = 'dashboard.html';
        }
    } else {
        // Update global variables
        isLoggedIn = false;
        currentUser = null;
        window.sbcms.isLoggedIn = isLoggedIn;
        window.sbcms.currentUser = currentUser;
        
        // Redirect from dashboard to login if not authenticated
        const currentPage = window.location.pathname.split('/').pop();
        if (currentPage === 'dashboard.html' && !isLoggedIn) {
            window.location.href = 'login.html';
        }
    }
}

function loginUser(email, password) {
    // In a real application, this would be an API call
    // For demo purposes, we'll simulate a login
    
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('sbcms_users')) || [];
    const user = users.find(u => u.email === email);
    
    if (!user) {
        return { success: false, message: 'User not found' };
    }
    
    // In a real app, passwords would be hashed and compared server-side
    // For demo, we're comparing plain text (not secure for production!)
    if (user.password !== password) {
        return { success: false, message: 'Invalid password' };
    }
    
    // Generate auth token (in real app, this would come from server)
    const authToken = generateAuthToken();
    
    // Store auth data
    localStorage.setItem('sbcms_auth_token', authToken);
    localStorage.setItem('sbcms_user_data', JSON.stringify({
        id: user.id,
        name: user.fullName,
        email: user.email,
        department: user.department,
        role: user.role
    }));
    
    return { success: true, user: user };
}

function registerUser(userData) {
    // In a real application, this would be an API call
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('sbcms_users')) || [];
    const existingUser = users.find(u => u.email === userData.email);
    
    if (existingUser) {
        return { success: false, message: 'User with this email already exists' };
    }
    
    // Create new user
    const newUser = {
        id: generateUserId(),
        ...userData,
        createdAt: new Date().toISOString(),
        isActive: true
    };
    
    users.push(newUser);
    localStorage.setItem('sbcms_users', JSON.stringify(users));
    
    return { success: true, user: newUser };
}

function logoutUser() {
    localStorage.removeItem('sbcms_auth_token');
    localStorage.removeItem('sbcms_user_data');
    isLoggedIn = false;
    currentUser = null;
    window.location.href = 'index.html';
}

function generateAuthToken() {
    return 'sbcms_' + Math.random().toString(36).substr(2) + Date.now().toString(36);
}

function generateUserId() {
    return 'user_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// ===== PASSWORD STRENGTH CHECKER =====
function checkPasswordStrength(password) {
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    
    // Character variety checks
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    // Cap at 5
    return Math.min(strength, 5);
}

function updatePasswordStrengthVisual(password) {
    const strength = checkPasswordStrength(password);
    const strengthBar = document.getElementById('passwordStrength');
    const strengthLabels = document.querySelectorAll('.strength-label');
    
    if (strengthBar) {
        const width = (strength / 5) * 100;
        strengthBar.style.width = `${width}%`;
        
        // Update color based on strength
        if (strength <= 1) {
            strengthBar.style.backgroundColor = '#dc3545'; // Red
        } else if (strength <= 3) {
            strengthBar.style.backgroundColor = '#ffc107'; // Yellow
        } else {
            strengthBar.style.backgroundColor = '#28a745'; // Green
        }
    }
    
    // Update strength labels
    strengthLabels.forEach((label, index) => {
        if (index < strength) {
            label.classList.add('active');
        } else {
            label.classList.remove('active');
        }
    });
    
    // Update requirement checkmarks
    updatePasswordRequirements(password);
}

function updatePasswordRequirements(password) {
    const requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
    };
    
    // Update each requirement visual
    Object.keys(requirements).forEach(req => {
        const element = document.querySelector(`.req-${req}`);
        if (element) {
            if (requirements[req]) {
                element.classList.add('valid');
            } else {
                element.classList.remove('valid');
            }
        }
    });
}

// ===== HOME PAGE INITIALIZATION =====
function initHomePage() {
    // Add any home page specific initialization here
    console.log('Home page initialized');
}

// ===== LOGIN PAGE INITIALIZATION =====
function initLoginPage() {
    // ADD PRE-CONFIGURED DEMO ACCOUNTS IF NONE EXIST
    if (!localStorage.getItem('sbcms_users')) {
        const demoUsers = [
            {
                id: 'user_admin_001',
                fullName: 'System Administrator',
                email: 'admin@starrfm.com',
                password: 'Admin@2024', // This would be hashed in real app
                department: 'it_ot',
                role: 'admin',
                enableMfa: true,
                createdAt: new Date().toISOString(),
                isActive: true
            },
            {
                id: 'user_security_001',
                fullName: 'Security Analyst',
                email: 'analyst@starrfm.com',
                password: 'Analyst@2024',
                department: 'security',
                role: 'analyst',
                enableMfa: true,
                createdAt: new Date().toISOString(),
                isActive: true
            },
            {
                id: 'user_broadcast_001',
                fullName: 'Broadcast Engineer',
                email: 'engineer@starrfm.com',
                password: 'Engineer@2024',
                department: 'broadcast',
                role: 'broadcaster',
                enableMfa: false,
                createdAt: new Date().toISOString(),
                isActive: true
            }
        ];
        localStorage.setItem('sbcms_users', JSON.stringify(demoUsers));
        console.log('Demo accounts created:', demoUsers.map(u => ({email: u.email, role: u.role})));
    }
    
    // Password visibility toggle
    const showPasswordBtn = document.getElementById('showPasswordBtn');
    const passwordInput = document.getElementById('password');
    
    if (showPasswordBtn && passwordInput) {
        showPasswordBtn.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });
    }
    
    // Password strength monitoring
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            updatePasswordStrengthVisual(this.value);
        });
    }
    
    // Tab switching
    const loginTab = document.getElementById('loginTab');
    const mfaTab = document.getElementById('mfaTab');
    const loginForm = document.getElementById('loginForm');
    const mfaForm = document.getElementById('mfaForm');
    
    if (loginTab && mfaTab) {
        loginTab.addEventListener('click', function() {
            loginTab.classList.add('active');
            mfaTab.classList.remove('active');
            loginForm.classList.add('active');
            mfaForm.classList.remove('active');
        });
        
        mfaTab.addEventListener('click', function() {
            mfaTab.classList.add('active');
            loginTab.classList.remove('active');
            mfaForm.classList.add('active');
            loginForm.classList.remove('active');
        });
    }
    
    // Login form submission
    const loginFormElement = document.getElementById('loginForm');
    if (loginFormElement) {
        loginFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // Basic validation
            if (!email || !password) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
            submitBtn.disabled = true;
            
            // Simulate API call delay
            setTimeout(() => {
                const result = loginUser(email, password);
                
                if (result.success) {
                    showNotification('Login successful!', 'success');
                    
                    // Switch to MFA tab if enabled
                    if (loginTab && mfaTab) {
                        loginTab.classList.remove('active');
                        mfaTab.classList.add('active');
                        loginForm.classList.remove('active');
                        mfaForm.classList.add('active');
                        
                        // Start MFA timer
                        startMfaTimer();
                        
                        // Simulate sending MFA code and display it
                        simulateMfaCode(true);
                    } else {
                        // If no MFA, redirect directly
                        setTimeout(() => {
                            window.location.href = 'dashboard.html';
                        }, 1500);
                    }
                } else {
                    showNotification(result.message || 'Login failed', 'error');
                }
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // MFA form submission
    const mfaFormElement = document.getElementById('mfaForm');
    if (mfaFormElement) {
        mfaFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const mfaCode = document.getElementById('mfaCode').value;
            
            if (!mfaCode || mfaCode.length !== 6) {
                showNotification('Please enter a valid 6-digit code', 'error');
                return;
            }
            
            // Check if the entered code matches the generated one
            if (mfaCode === currentOtpCode) {
                showNotification('MFA verification successful! Redirecting to dashboard...', 'success');
                
                // Ensure authentication data is properly set
                const userData = localStorage.getItem('sbcms_user_data');
                if (userData) {
                    currentUser = JSON.parse(userData);
                    isLoggedIn = true;
                    
                    // Force update global variables
                    window.sbcms.isLoggedIn = isLoggedIn;
                    window.sbcms.currentUser = currentUser;
                }
                
                // Add a small delay to ensure everything is properly set
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1000);
            } else {
                showNotification('Invalid verification code. Please try again.', 'error');
            }
        });
    }
    
    // Forgot password link
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('Password reset functionality would be implemented here', 'info');
        });
    }
    
    // Resend MFA code
    const resendMfaBtn = document.getElementById('resendMfaBtn');
    if (resendMfaBtn) {
        resendMfaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            startMfaTimer();
            simulateMfaCode(true);
            showNotification('New verification code sent to your email', 'success');
        });
    }
}

// ===== MFA TIMER =====
function startMfaTimer() {
    let timeLeft = 120; // 2 minutes in seconds
    const timerElement = document.getElementById('timer');
    const mfaTimer = document.getElementById('mfaTimer');
    
    if (!timerElement) return;
    
    // Reset timer display
    timerElement.textContent = '02:00';
    if (mfaTimer) mfaTimer.style.color = '';
    
    const timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 30) {
            if (mfaTimer) mfaTimer.style.color = '#dc3545'; // Red when time is running out
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = '00:00';
            if (mfaTimer) mfaTimer.style.color = '#dc3545';
        }
        
        timeLeft--;
    }, 1000);
}

function simulateMfaCode(showOnScreen = false) {
    // Generate a 6-digit OTP code
    currentOtpCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Log to console
    console.log(`Demo MFA code: ${currentOtpCode}`);
    
    // Display on screen if requested
    if (showOnScreen) {
        displayOtpOnScreen(currentOtpCode);
    }
    
    return currentOtpCode;
}

function displayOtpOnScreen(otpCode) {
    // Remove any existing OTP display
    const existingDisplay = document.querySelector('.otp-display-container');
    if (existingDisplay) {
        existingDisplay.remove();
    }
    
    // Create OTP display container
    const otpDisplay = document.createElement('div');
    otpDisplay.className = 'otp-display-container';
    otpDisplay.innerHTML = `
        <div class="otp-display">
            <div class="otp-header">
                <i class="fas fa-key"></i>
                <h4>Your OTP Code</h4>
            </div>
            <div class="otp-code">
                <span class="otp-digit">${otpCode[0]}</span>
                <span class="otp-digit">${otpCode[1]}</span>
                <span class="otp-digit">${otpCode[2]}</span>
                <span class="otp-digit">${otpCode[3]}</span>
                <span class="otp-digit">${otpCode[4]}</span>
                <span class="otp-digit">${otpCode[5]}</span>
            </div>
            <div class="otp-instructions">
                <p><i class="fas fa-info-circle"></i> For demo purposes, this OTP is displayed here. In a real application, it would be sent to your email.</p>
                <p><i class="fas fa-clock"></i> This code expires in 2 minutes.</p>
            </div>
            <button class="btn btn-small copy-otp-btn">
                <i class="fas fa-copy"></i> Copy Code
            </button>
        </div>
    `;
    
    // Add to the MFA form
    const mfaForm = document.getElementById('mfaForm');
    if (mfaForm) {
        // Insert after the MFA instructions
        const mfaInstructions = mfaForm.querySelector('.mfa-instructions');
        if (mfaInstructions) {
            mfaInstructions.parentNode.insertBefore(otpDisplay, mfaInstructions.nextSibling);
        } else {
            mfaForm.insertBefore(otpDisplay, mfaForm.firstChild);
        }
    }
    
    // Add copy functionality
    const copyBtn = otpDisplay.querySelector('.copy-otp-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(otpCode).then(() => {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                this.classList.add('copied');
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy OTP:', err);
                showNotification('Failed to copy OTP code', 'error');
            });
        });
    }
    
    // Add CSS for OTP display if not already present
    if (!document.getElementById('otp-display-styles')) {
        const style = document.createElement('style');
        style.id = 'otp-display-styles';
        style.textContent = `
            .otp-display-container {
                margin: 20px 0;
                animation: fadeIn 0.5s ease;
            }
            
            .otp-display {
                background: linear-gradient(135deg, #f0f7ff 0%, #e6f2ff 100%);
                border-radius: 12px;
                padding: 20px;
                border: 2px solid #2a5bd7;
                box-shadow: 0 4px 12px rgba(42, 91, 215, 0.15);
            }
            
            .otp-header {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 15px;
                color: #2a5bd7;
            }
            
            .otp-header i {
                font-size: 1.5rem;
            }
            
            .otp-header h4 {
                margin: 0;
                font-size: 1.1rem;
            }
            
            .otp-code {
                display: flex;
                justify-content: center;
                gap: 10px;
                margin: 20px 0;
            }
            
            .otp-digit {
                width: 50px;
                height: 60px;
                background: white;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.8rem;
                font-weight: bold;
                color: #2a5bd7;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                border: 2px solid #2a5bd7;
                font-family: 'Roboto Mono', monospace;
            }
            
            .otp-instructions {
                background-color: rgba(255, 255, 255, 0.8);
                border-radius: 8px;
                padding: 12px;
                margin: 15px 0;
                font-size: 0.9rem;
                color: #555;
            }
            
            .otp-instructions p {
                margin: 8px 0;
                display: flex;
                align-items: flex-start;
                gap: 10px;
            }
            
            .otp-instructions i {
                color: #2a5bd7;
                margin-top: 2px;
            }
            
            .copy-otp-btn {
                width: 100%;
                margin-top: 10px;
                background-color: #2a5bd7;
                color: white;
                border: none;
                transition: all 0.3s ease;
            }
            
            .copy-otp-btn:hover {
                background-color: #1e4ac4;
                transform: translateY(-2px);
            }
            
            .copy-otp-btn.copied {
                background-color: #28a745;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== SIGNUP PAGE INITIALIZATION =====
function initSignupPage() {
    // Multi-step form navigation
    let currentStep = 1;
    const totalSteps = 3;
    
    // Step navigation buttons
    const nextBtn1 = document.getElementById('nextBtn1');
    const nextBtn2 = document.getElementById('nextBtn2');
    const backBtn2 = document.getElementById('backBtn2');
    const backBtn3 = document.getElementById('backBtn3');
    const cancelBtn = document.getElementById('cancelBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Form steps
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const successMessage = document.getElementById('successMessage');
    
    // Progress steps
    const progressSteps = document.querySelectorAll('.progress-step');
    
    // Form inputs
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const departmentSelect = document.getElementById('department');
    const roleSelect = document.getElementById('role');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const enableMfaCheckbox = document.getElementById('enableMfa');
    
    // Review fields
    const reviewName = document.getElementById('reviewName');
    const reviewEmail = document.getElementById('reviewEmail');
    const reviewDept = document.getElementById('reviewDept');
    const reviewRole = document.getElementById('reviewRole');
    const reviewMfa = document.getElementById('reviewMfa');
    
    // Password visibility toggle
    const showPasswordBtn = document.getElementById('showPasswordBtn');
    if (showPasswordBtn && passwordInput) {
        showPasswordBtn.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });
    }
    
    // Password strength monitoring
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            updatePasswordStrengthVisual(this.value);
            checkPasswordMatch();
        });
    }
    
    // Confirm password match check
    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', checkPasswordMatch);
    }
    
    function checkPasswordMatch() {
        const password = passwordInput ? passwordInput.value : '';
        const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';
        const matchElement = document.getElementById('passwordMatch');
        
        if (!matchElement) return;
        
        if (confirmPassword === '') {
            matchElement.textContent = '';
            matchElement.className = 'validation-message';
        } else if (password === confirmPassword) {
            matchElement.textContent = '✓ Passwords match';
            matchElement.className = 'validation-message valid';
        } else {
            matchElement.textContent = '✗ Passwords do not match';
            matchElement.className = 'validation-message error';
        }
    }
    
    // Step navigation functions
    function goToStep(step) {
        // Hide all steps
        [step1, step2, step3, successMessage].forEach(step => {
            if (step) step.style.display = 'none';
        });
        
        // Show current step
        if (step === 1 && step1) step1.style.display = 'block';
        if (step === 2 && step2) step2.style.display = 'block';
        if (step === 3 && step3) step3.style.display = 'block';
        if (step === 'success' && successMessage) successMessage.style.display = 'block';
        
        // Update progress steps
        progressSteps.forEach(progressStep => {
            const stepNum = parseInt(progressStep.getAttribute('data-step'));
            if (stepNum < step) {
                progressStep.classList.add('completed');
                progressStep.classList.add('active');
            } else if (stepNum === step) {
                progressStep.classList.add('active');
                progressStep.classList.remove('completed');
            } else {
                progressStep.classList.remove('active');
                progressStep.classList.remove('completed');
            }
        });
        
        currentStep = step;
        
        // Update review details if going to step 3
        if (step === 3) {
            updateReviewDetails();
        }
    }
    
    function updateReviewDetails() {
        if (reviewName && fullNameInput) reviewName.textContent = fullNameInput.value;
        if (reviewEmail && emailInput) reviewEmail.textContent = emailInput.value;
        if (reviewDept && departmentSelect) reviewDept.textContent = departmentSelect.options[departmentSelect.selectedIndex].text;
        if (reviewRole && roleSelect) reviewRole.textContent = roleSelect.options[roleSelect.selectedIndex].text;
        if (reviewMfa && enableMfaCheckbox) reviewMfa.textContent = enableMfaCheckbox.checked ? 'Yes' : 'No';
    }
    
    function validateStep1() {
        if (!fullNameInput || !fullNameInput.value.trim()) {
            showNotification('Please enter your full name', 'error');
            return false;
        }
        
        if (!emailInput || !emailInput.value.trim()) {
            showNotification('Please enter your email address', 'error');
            return false;
        }
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showNotification('Please enter a valid email address', 'error');
            return false;
        }
        
        if (!departmentSelect || departmentSelect.value === '') {
            showNotification('Please select your department', 'error');
            return false;
        }
        
        if (!roleSelect || roleSelect.value === '') {
            showNotification('Please select your role', 'error');
            return false;
        }
        
        return true;
    }
    
    function validateStep2() {
        if (!passwordInput || !passwordInput.value) {
            showNotification('Please create a password', 'error');
            return false;
        }
        
        // Check password strength
        const strength = checkPasswordStrength(passwordInput.value);
        if (strength < 3) {
            showNotification('Please create a stronger password', 'error');
            return false;
        }
        
        if (!confirmPasswordInput || !confirmPasswordInput.value) {
            showNotification('Please confirm your password', 'error');
            return false;
        }
        
        if (passwordInput.value !== confirmPasswordInput.value) {
            showNotification('Passwords do not match', 'error');
            return false;
        }
        
        const acceptTerms = document.getElementById('acceptTerms');
        if (!acceptTerms || !acceptTerms.checked) {
            showNotification('You must accept the terms and conditions', 'error');
            return false;
        }
        
        return true;
    }
    
    // Event listeners for navigation buttons
    if (nextBtn1) {
        nextBtn1.addEventListener('click', function() {
            if (validateStep1()) {
                goToStep(2);
            }
        });
    }
    
    if (nextBtn2) {
        nextBtn2.addEventListener('click', function() {
            if (validateStep2()) {
                goToStep(3);
            }
        });
    }
    
    if (backBtn2) {
        backBtn2.addEventListener('click', function() {
            goToStep(1);
        });
    }
    
    if (backBtn3) {
        backBtn3.addEventListener('click', function() {
            goToStep(2);
        });
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to cancel registration? All entered data will be lost.')) {
                window.location.href = 'index.html';
            }
        });
    }
    
    // Form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm && submitBtn) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect all form data
            const userData = {
                fullName: fullNameInput ? fullNameInput.value : '',
                email: emailInput ? emailInput.value : '',
                department: departmentSelect ? departmentSelect.value : '',
                role: roleSelect ? roleSelect.value : '',
                password: passwordInput ? passwordInput.value : '',
                enableMfa: enableMfaCheckbox ? enableMfaCheckbox.checked : false
            };
            
            // Show loading state
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
            submitBtn.disabled = true;
            
            // Simulate API call delay
            setTimeout(() => {
                const result = registerUser(userData);
                
                if (result.success) {
                    showNotification('Account created successfully!', 'success');
                    goToStep('success');
                } else {
                    showNotification(result.message || 'Registration failed', 'error');
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }
            }, 2000);
        });
    }
    
    // Initialize with step 1
    goToStep(1);
}

// ===== DASHBOARD INITIALIZATION =====
function initDashboard() {
    console.log('Initializing dashboard...');
    
    // Check authentication by looking directly at localStorage
    const authToken = localStorage.getItem('sbcms_auth_token');
    const userData = localStorage.getItem('sbcms_user_data');
    
    console.log('Auth token exists:', !!authToken);
    console.log('User data exists:', !!userData);
    
    if (!authToken || !userData) {
        console.log('Not authenticated, redirecting to login...');
        window.location.href = 'login.html';
        return;
    }
    
    // Update global variables
    isLoggedIn = true;
    currentUser = JSON.parse(userData);
    console.log('User authenticated:', currentUser.email);
    
    // Initialize dashboard components
    updateUserInfo();
    updateDateTime();
    setInterval(updateDateTime, 1000);
    initCharts();
    setupDashboardEvents();
    loadDashboardData();
    setupNavigation();
    
    // Show welcome notification
    setTimeout(() => {
        showNotification(`Welcome back, ${currentUser.name}!`, 'success');
    }, 500);
}

function updateUserInfo() {
    if (currentUser) {
        const userNameElement = document.getElementById('userName');
        const userRoleElement = document.getElementById('userRole');
        
        if (userNameElement) userNameElement.textContent = currentUser.name;
        if (userRoleElement) userRoleElement.textContent = currentUser.role;
    }
}

function updateDateTime() {
    const now = new Date();
    const dateTimeElement = document.getElementById('currentDateTime');
    
    if (dateTimeElement) {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
    }
}

function initCharts() {
    // Initialize threat activity chart
    const threatChartCanvas = document.getElementById('threatActivityChart');
    
    if (threatChartCanvas) {
        const ctx = threatChartCanvas.getContext('2d');
        
        // Destroy existing chart if it exists
        if (threatChart) {
            threatChart.destroy();
        }
        
        // Sample data
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const threatData = [12, 19, 8, 15, 22, 18, 14];
        const incidentData = [2, 5, 1, 3, 7, 4, 3];
        
        threatChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: days,
                datasets: [
                    {
                        label: 'Threat Events',
                        data: threatData,
                        borderColor: '#2a5bd7',
                        backgroundColor: 'rgba(42, 91, 215, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Incidents',
                        data: incidentData,
                        borderColor: '#dc3545',
                        backgroundColor: 'rgba(220, 53, 69, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Events'
                        }
                    }
                }
            }
        });
    }
}

function updateChartData(days) {
    // This function would fetch new data based on the selected time range
    showNotification(`Loading threat data for last ${days} days...`, 'info');
    
    // Simulate loading new data
    setTimeout(() => {
        if (threatChart) {
            // Update chart with new data based on days parameter
            const newLabels = generateDateLabels(days);
            const newThreatData = generateRandomData(days, 5, 25);
            const newIncidentData = generateRandomData(days, 0, 10);
            
            threatChart.data.labels = newLabels;
            threatChart.data.datasets[0].data = newThreatData;
            threatChart.data.datasets[1].data = newIncidentData;
            threatChart.update();
            
            showNotification(`Chart updated with ${days} days of data`, 'success');
        }
    }, 1000);
}

function generateDateLabels(days) {
    const labels = [];
    for (let i = days - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        labels.push(date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
    }
    return labels;
}

function generateRandomData(count, min, max) {
    const data = [];
    for (let i = 0; i < count; i++) {
        data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return data;
}

function setupDashboardEvents() {
    // Refresh button
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Refreshing...';
            this.disabled = true;
            
            setTimeout(() => {
                loadDashboardData();
                this.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
                this.disabled = false;
                showNotification('Dashboard data refreshed', 'success');
            }, 1000);
        });
    }
    
    // New report button
    const newReportBtn = document.getElementById('newReportBtn');
    if (newReportBtn) {
        newReportBtn.addEventListener('click', function() {
            openModal('newIncidentModal');
        });
    }
    
    // Quick actions button
    const quickActionsBtn = document.getElementById('quickActionsBtn');
    if (quickActionsBtn) {
        quickActionsBtn.addEventListener('click', function() {
            openModal('quickActionsModal');
        });
    }
    
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
                logoutUser();
            }
        });
    }
    
    // Time range filter
    const timeRangeSelect = document.getElementById('timeRange');
    if (timeRangeSelect) {
        timeRangeSelect.addEventListener('change', function() {
            updateChartData(this.value);
        });
    }
    
    // Incident form submission
    const incidentForm = document.getElementById('incidentForm');
    if (incidentForm) {
        incidentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('incidentTitle').value;
            const type = document.getElementById('incidentType').value;
            const severity = document.getElementById('incidentSeverity').value;
            const description = document.getElementById('incidentDescription').value;
            
            // Get affected systems
            const affectedSystems = [];
            document.querySelectorAll('input[name="affectedSystems"]:checked').forEach(checkbox => {
                affectedSystems.push(checkbox.value);
            });
            
            // Create incident object
            const incident = {
                id: 'incident_' + Date.now(),
                title: title,
                type: type,
                severity: severity,
                description: description,
                affectedSystems: affectedSystems,
                reporter: currentUser.name,
                status: 'reported',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            
            // Save to localStorage
            const incidents = JSON.parse(localStorage.getItem('sbcms_incidents')) || [];
            incidents.push(incident);
            localStorage.setItem('sbcms_incidents', JSON.stringify(incidents));
            
            // Show success message
            showNotification('Incident report created successfully!', 'success');
            
            // Close modal and reset form
            closeModal('newIncidentModal');
            incidentForm.reset();
            
            // Update alert count
            updateAlertCount();
        });
    }
}

function setupNavigation() {
    // Get all navigation items
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get section from data attribute
            const section = this.getAttribute('data-section');
            
            // Update active state
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Switch to selected section
            switchSection(section);
        });
    });
}

function switchSection(section) {
    activeSection = section;
    
    // Hide all content sections
    const contentSections = document.querySelectorAll('.dashboard-content');
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(section + 'Content');
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Update page title
        const pageTitle = document.getElementById('pageTitle');
        const pageSubtitle = document.getElementById('pageSubtitle');
        
        switch(section) {
            case 'dashboard':
                pageTitle.textContent = 'Security Dashboard';
                pageSubtitle.textContent = 'Welcome to the Secure Broadcast Cybersecurity Management System';
                break;
            case 'broadcast':
                pageTitle.textContent = 'Broadcast Systems';
                pageSubtitle.textContent = 'Monitor and manage broadcast infrastructure';
                loadBroadcastContent();
                break;
            case 'alerts':
                pageTitle.textContent = 'Security Alerts';
                pageSubtitle.textContent = 'View and manage security alerts';
                loadAlertsContent();
                break;
            case 'threats':
                pageTitle.textContent = 'Threat Intelligence';
                pageSubtitle.textContent = 'Analyze threat patterns and intelligence';
                loadThreatsContent();
                break;
            case 'incidents':
                pageTitle.textContent = 'Incident Reports';
                pageSubtitle.textContent = 'Manage cybersecurity incident reports';
                loadIncidentsContent();
                break;
            case 'users':
                pageTitle.textContent = 'User Management';
                pageSubtitle.textContent = 'Manage system users and permissions';
                loadUsersContent();
                break;
            case 'settings':
                pageTitle.textContent = 'System Settings';
                pageSubtitle.textContent = 'Configure system preferences and security';
                loadSettingsContent();
                break;
            case 'backup':
                pageTitle.textContent = 'Backup & Recovery';
                pageSubtitle.textContent = 'Manage system backups and recovery procedures';
                loadBackupContent();
                break;
        }
    }
}

function loadDashboardData() {
    console.log('Loading dashboard data...');
    
    // Update alert count
    updateAlertCount();
    
    // Update systems status
    updateSystemsStatus();
    
    // Load alerts table
    loadAlertsTable();
    
    // Load systems grid
    loadSystemsGrid();
}

function updateAlertCount() {
    const alertCountElement = document.getElementById('alertCount');
    const alerts = JSON.parse(localStorage.getItem('sbcms_alerts')) || [];
    const activeAlerts = alerts.filter(alert => !alert.resolved).length;
    
    if (alertCountElement) {
        alertCountElement.textContent = activeAlerts;
        
        if (activeAlerts === 0) {
            alertCountElement.classList.remove('alert');
        } else {
            alertCountElement.classList.add('alert');
        }
    }
}

function updateSystemsStatus() {
    const broadcastStatusElement = document.getElementById('broadcastStatus');
    const uptimeElement = document.getElementById('systemUptime');
    const activeUsersElement = document.getElementById('activeUsers');
    const lastIncidentElement = document.getElementById('lastIncident');
    
    // Simulate dynamic data
    const statuses = ['All Online', '1 Warning', 'All Operational'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const uptime = (99.5 + Math.random() * 0.5).toFixed(1);
    const activeUsers = Math.floor(Math.random() * 5) + 8;
    
    if (broadcastStatusElement) broadcastStatusElement.textContent = randomStatus;
    if (uptimeElement) uptimeElement.textContent = `${uptime}%`;
    if (activeUsersElement) activeUsersElement.textContent = activeUsers;
    if (lastIncidentElement) {
        const daysAgo = Math.floor(Math.random() * 3) + 1;
        lastIncidentElement.textContent = `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
    }
}

function loadAlertsTable() {
    const tableBody = document.getElementById('alertsTableBody');
    if (!tableBody) return;
    
    // Sample alerts data
    const alerts = [
        {
            id: 1,
            time: '10:45 AM',
            type: 'Multiple Failed Logins',
            system: 'Broadcast Server 1',
            severity: 'medium',
            status: 'investigating'
        },
        {
            id: 2,
            time: '09:30 AM',
            type: 'Unusual Network Traffic',
            system: 'Firewall',
            severity: 'low',
            status: 'resolved'
        },
        {
            id: 3,
            time: 'Yesterday, 11:20 PM',
            type: 'Port Scan Detected',
            system: 'External Network',
            severity: 'medium',
            status: 'investigating'
        },
        {
            id: 4,
            time: 'Yesterday, 09:15 PM',
            type: 'High CPU Usage',
            system: 'Streaming Server',
            severity: 'low',
            status: 'resolved'
        },
        {
            id: 5,
            time: 'Yesterday, 03:45 PM',
            type: 'Unauthorized Access Attempt',
            system: 'Admin Panel',
            severity: 'high',
            status: 'pending'
        }
    ];
    
    // Clear existing rows
    tableBody.innerHTML = '';
    
    // Add alert rows
    alerts.forEach(alert => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${alert.time}</td>
            <td>${alert.type}</td>
            <td>${alert.system}</td>
            <td><span class="severity-${alert.severity}">${alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}</span></td>
            <td><span class="status-${alert.status}">${alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}</span></td>
            <td>
                <button class="btn-action" title="Acknowledge" onclick="acknowledgeAlert(${alert.id})">
                    <i class="fas fa-check"></i>
                </button>
                <button class="btn-action" title="Investigate" onclick="investigateAlert(${alert.id})">
                    <i class="fas fa-search"></i>
                </button>
                <button class="btn-action" title="View Details" onclick="viewAlertDetails(${alert.id})">
                    <i class="fas fa-eye"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function loadSystemsGrid() {
    const systemsGrid = document.getElementById('systemsGrid');
    if (!systemsGrid) return;
    
    // Sample systems data
    const systems = [
        {
            id: 'BCS-001',
            name: 'On-Air Broadcast Server',
            type: 'broadcast_server',
            status: 'online',
            cpu: 42,
            memory: 68,
            disk: 45,
            uptime: '15 days, 4 hours',
            streams: null
        },
        {
            id: 'STR-001',
            name: 'Streaming Infrastructure',
            type: 'streaming_server',
            status: 'online',
            cpu: 38,
            memory: 54,
            disk: 62,
            uptime: '10 days, 2 hours',
            streams: 1250
        },
        {
            id: 'NWS-001',
            name: 'Digital Newsroom System',
            type: 'newsroom_system',
            status: 'online',
            cpu: 28,
            memory: 45,
            disk: 38,
            uptime: '20 days, 8 hours',
            streams: null
        },
        {
            id: 'FWL-001',
            name: 'Main Firewall',
            type: 'firewall',
            status: 'online',
            cpu: 15,
            memory: 32,
            disk: 12,
            uptime: '30 days, 0 hours',
            streams: null
        },
        {
            id: 'STR-002',
            name: 'Media Storage Server',
            type: 'storage',
            status: 'online',
            cpu: 22,
            memory: 41,
            disk: 78,
            uptime: '25 days, 12 hours',
            streams: null
        },
        {
            id: 'BCS-002',
            name: 'Backup Broadcast Server',
            type: 'broadcast_server',
            status: 'standby',
            cpu: 12,
            memory: 25,
            disk: 32,
            uptime: '8 days, 6 hours',
            streams: null
        }
    ];
    
    // Clear existing systems
    systemsGrid.innerHTML = '';
    
    // Add system cards
    systems.forEach(system => {
        const card = document.createElement('div');
        card.className = 'system-card';
        card.innerHTML = `
            <div class="system-header">
                <h3>${system.name}</h3>
                <span class="system-status ${system.status}">${system.status.charAt(0).toUpperCase() + system.status.slice(1)}</span>
            </div>
            <div class="system-info">
                <p><i class="fas fa-server"></i> Server ID: ${system.id}</p>
                <p><i class="fas fa-chart-line"></i> CPU: ${system.cpu}% | Memory: ${system.memory}%</p>
                <p><i class="fas fa-hdd"></i> Disk: ${system.disk}% used</p>
                ${system.streams ? `<p><i class="fas fa-wifi"></i> Active Streams: ${system.streams}</p>` : ''}
                <p><i class="fas fa-clock"></i> Uptime: ${system.uptime}</p>
            </div>
            <div class="system-actions">
                <button class="btn btn-small" onclick="viewSystemDetails('${system.id}')">Details</button>
                <button class="btn btn-small btn-outline" onclick="restartSystem('${system.id}')">Restart</button>
                <button class="btn btn-small btn-outline" onclick="viewSystemLogs('${system.id}')">Logs</button>
            </div>
        `;
        systemsGrid.appendChild(card);
    });
}

// ===== DASHBOARD FUNCTIONS =====

// View Functions
function viewBroadcastSystems() {
    switchSection('broadcast');
}

function viewAlerts() {
    switchSection('alerts');
}

function viewUserActivity() {
    switchSection('users');
}

// Alert Functions
function acknowledgeAlert(alertId) {
    showNotification(`Alert #${alertId} acknowledged`, 'success');
    // In a real app, update alert status in database
}

function investigateAlert(alertId) {
    showNotification(`Investigating alert #${alertId}...`, 'info');
    // In a real app, open investigation panel
}

function viewAlertDetails(alertId) {
    showNotification(`Viewing details for alert #${alertId}`, 'info');
    // In a real app, show alert details modal
}

function acknowledgeAllAlerts() {
    if (confirm('Acknowledge all active alerts?')) {
        showNotification('All alerts acknowledged', 'success');
        // In a real app, update all alerts in database
    }
}

function viewAllAlerts() {
    switchSection('alerts');
}

// System Functions
function restartSystem(systemId) {
    if (confirm(`Are you sure you want to restart ${systemId}?`)) {
        showNotification(`Restarting ${systemId}...`, 'warning');
        
        // Simulate restart process
        setTimeout(() => {
            showNotification(`${systemId} restarted successfully`, 'success');
            // Refresh system status
            loadSystemsGrid();
        }, 3000);
    }
}

function restartAllSystems() {
    if (confirm('Are you sure you want to restart all systems? This may cause temporary service interruption.')) {
        showNotification('Restarting all systems...', 'warning');
        
        // Simulate restart process
        setTimeout(() => {
            showNotification('All systems restarted successfully', 'success');
            // Refresh system status
            loadSystemsGrid();
        }, 5000);
    }
}

function viewSystemDetails(systemId) {
    showNotification(`Viewing details for ${systemId}`, 'info');
    // In a real app, show system details modal
}

function viewSystemLogs(systemId) {
    showNotification(`Opening logs for ${systemId}`, 'info');
    // In a real app, show system logs modal
}

// Quick Action Functions
function scanForThreats() {
    showNotification('Starting comprehensive threat scan...', 'info');
    
    // Simulate scanning process
    setTimeout(() => {
        const threatsFound = Math.floor(Math.random() * 3);
        if (threatsFound > 0) {
            showNotification(`Scan complete: ${threatsFound} potential threat(s) detected`, 'warning');
        } else {
            showNotification('Scan complete: No threats detected', 'success');
        }
    }, 3000);
}

function generateSecurityReport() {
    showNotification('Generating security report...', 'info');
    
    // Simulate report generation
    setTimeout(() => {
        showNotification('Security report generated successfully. Download will start shortly.', 'success');
        
        // Simulate download
        setTimeout(() => {
            showNotification('Report downloaded: security_report_2026.pdf', 'success');
        }, 1000);
    }, 2000);
}

function runBackup() {
    showNotification('Starting system backup...', 'info');
    
    // Simulate backup process
    setTimeout(() => {
        showNotification('Backup completed successfully', 'success');
    }, 4000);
}

function testBackupRecovery() {
    if (confirm('Test backup recovery process? This is a simulation and will not affect live data.')) {
        showNotification('Testing backup recovery...', 'info');
        
        // Simulate recovery test
        setTimeout(() => {
            showNotification('Backup recovery test successful. All systems operational.', 'success');
        }, 3000);
    }
}

function updateSecurityRules() {
    showNotification('Updating security rules...', 'info');
    
    // Simulate update process
    setTimeout(() => {
        showNotification('Security rules updated successfully', 'success');
    }, 2000);
}

function auditUserAccess() {
    showNotification('Starting user access audit...', 'info');
    
    // Simulate audit process
    setTimeout(() => {
        const issuesFound = Math.floor(Math.random() * 2);
        if (issuesFound > 0) {
            showNotification(`Audit complete: ${issuesFound} access issue(s) found`, 'warning');
        } else {
            showNotification('Audit complete: No access issues found', 'success');
        }
    }, 2500);
}

function simulateAttack() {
    if (confirm('Simulate cyber attack for testing purposes? This will generate test alerts.')) {
        showNotification('Simulating cyber attack...', 'warning');
        
        // Generate test alerts
        setTimeout(() => {
            showNotification('Attack simulation complete. Test alerts generated.', 'success');
            updateAlertCount();
            loadAlertsTable();
        }, 2000);
    }
}

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Footer Functions
function showHelp() {
    showNotification('Opening help documentation...', 'info');
}

function viewDocumentation() {
    showNotification('Opening system documentation...', 'info');
}

function viewSystemLogs() {
    switchSection('broadcast');
}

function exportData() {
    showNotification('Exporting system data...', 'info');
    
    // Simulate export process
    setTimeout(() => {
        showNotification('Data exported successfully: sbcms_export_2026.json', 'success');
    }, 1500);
}

// Section Content Loaders (simplified versions)
function loadBroadcastContent() {
    const content = document.getElementById('broadcastContent');
    if (content) {
        content.innerHTML = `
            <div class="dashboard-section">
                <h2 class="section-title"><i class="fas fa-broadcast-tower"></i> Broadcast Systems Management</h2>
                <p>This section would contain detailed broadcast system controls, monitoring, and management tools.</p>
                <div class="placeholder-content">
                    <i class="fas fa-broadcast-tower fa-3x"></i>
                    <p>Broadcast Systems Management Interface</p>
                    <button class="btn btn-primary" onclick="showNotification('Broadcast system management would be implemented here', 'info')">
                        Explore Features
                    </button>
                </div>
            </div>
        `;
    }
}

function loadAlertsContent() {
    const content = document.getElementById('alertsContent');
    if (content) {
        content.innerHTML = `
            <div class="dashboard-section">
                <h2 class="section-title"><i class="fas fa-exclamation-triangle"></i> Security Alerts Management</h2>
                <p>This section would contain comprehensive alert management, filtering, and resolution tools.</p>
                <div class="placeholder-content">
                    <i class="fas fa-exclamation-triangle fa-3x"></i>
                    <p>Advanced Alert Management Interface</p>
                    <button class="btn btn-primary" onclick="showNotification('Alert management would be implemented here', 'info')">
                        Manage Alerts
                    </button>
                </div>
            </div>
        `;
    }
}

// Other section loaders would be similar...

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Set icon based on type
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    if (type === 'warning') icon = 'exclamation-triangle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Add styles if not already present
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                gap: 15px;
                max-width: 400px;
                z-index: 9999;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                animation: slideIn 0.3s ease;
                transform: translateX(0);
            }
            
            .notification-success {
                background-color: #d4edda;
                color: #155724;
                border-left: 4px solid #28a745;
            }
            
            .notification-error {
                background-color: #f8d7da;
                color: #721c24;
                border-left: 4px solid #dc3545;
            }
            
            .notification-warning {
                background-color: #fff3cd;
                color: #856404;
                border-left: 4px solid #ffc107;
            }
            
            .notification-info {
                background-color: #d1ecf1;
                color: #0c5460;
                border-left: 4px solid #17a2b8;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: inherit;
                cursor: pointer;
                margin-left: auto;
                padding: 0;
            }
            
            @keyframes slideIn {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        });
    }
}

// ===== UTILITY FUNCTIONS =====
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function formatTime(date) {
    return new Date(date).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Export functions and variables for use in other modules if needed
window.sbcms = {
    loginUser,
    logoutUser,
    registerUser,
    showNotification,
    checkAuthStatus,
    isLoggedIn,
    currentUser
};







