/**
 * Formata um valor de entrada como número de telefone brasileiro.
 * Aceita fixo (10 dígitos): (XX) XXXX-XXXX
 * Aceita celular (11 dígitos): (XX) XXXXX-XXXX
 */
export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length === 0) return ''
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  // celular: 11 dígitos
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

/**
 * Valida se a string de dígitos representa um telefone brasileiro válido.
 * Fixo: 10 dígitos | Celular: 11 dígitos (começa com 9 no 3º dígito)
 */
export function isValidPhone(digits: string): boolean {
  if (digits.length === 10) return true
  if (digits.length === 11 && digits[2] === '9') return true
  return false
}

/**
 * Valida formato de e-mail.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
}
