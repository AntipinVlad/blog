// Валидатор проверяет пустая ли строка
export class Validators {
    static required(value = ''){
        return value && value.trim();
    }
}