# Установка
## Уставнока зависимостей
Установите зависимости:
```bash
# yarn install
или
# npm install
```
## Переменное окружение
Создайте файл .env
Введите данные от сервера базы данных (Предварительно создайте базу данных)
```bash
DATABASE_URL="postgresql://(Имя пользователя):(Пароль)@(Ip):(Port)/(Имя базы данных)?schema=public"
```
Например:
```bash
DATABASE_URL="postgresql://postgres:root@localhost:5432/my-menu?schema=public"
```
## Миграция
Для запуска миграций:
```bash
# npx prisma migrate dev
```
## Запуск
Для запуска приложения:
```bash
# yarn run start-dev
или
# npm run start-dev
```
# Пути
```bash
GET /menu - Получить все меню
GET /menu/:id - Получить один элемент по id
POST /menu - Создать меню
PUT /menu/:id - Обновить меню
DELETE /menu/:id - Удалить меню
GET /category - Получить все категории
GET /category/:id - Получить один элемент по id
POST /category - Создать категорию
PUT /category/:id - Обновить категорию
DELETE /category/:id - Удалить категорию
```
