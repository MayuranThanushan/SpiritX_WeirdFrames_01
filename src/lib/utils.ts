import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validatePassword(password: string) {
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return {
    isValid: hasLowerCase && hasUpperCase && hasSpecialChar,
    strength: [hasLowerCase, hasUpperCase, hasSpecialChar].filter(Boolean).length,
    errors: {
      lowercase: !hasLowerCase,
      uppercase: !hasUpperCase,
      specialChar: !hasSpecialChar,
    },
  };
}