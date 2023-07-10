export const Patterns = {
    EMAIL: {
        pattern: '[a-zA-Z0-9_.\\-]+@[a-zA-Z0-9_\\-]+\\.[a-zA-Z0-9_\\-]{2,4}',
        message: 'Введите почту в формате username@server.domain'
    },
    USERNAME: {
        pattern: '[a-zA-ZА-Яа-я\\s\\-]+',
        message: 'Поле может содержать только латиницу, кириллицу, пробел или дефис'
    }
}
