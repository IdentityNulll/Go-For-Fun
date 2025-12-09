# Game Management System Backend

## Xususiyatlar

### Rollar:
- **Admin**: Barcha foydalanuvchilarni va o'yinlarni boshqaradi
- **Organizer**: O'z o'yinlarini yaratadi va boshqaradi
- **Player**: O'yinlarga ro'yxatdan o'tadi

### API Endpoints:

#### Auth
- POST `/api/auth/register` - Ro'yxatdan o'tish
- POST `/api/auth/login` - Tizimga kirish

#### Admin
- GET `/api/admin/users` - Barcha foydalanuvchilar
- GET `/api/admin/games` - Barcha o'yinlar
- POST `/api/admin/organizers` - Organizer yaratish
- DELETE `/api/admin/users/:userType/:userId` - Foydalanuvchi o'chirish

#### Organizer
- GET `/api/organizer/games` - Mening o'yinlarim
- POST `/api/organizer/games` - O'yin yaratish
- PUT `/api/organizer/games/:gameId` - O'yinni yangilash
- DELETE `/api/organizer/games/:gameId` - O'yinni o'chirish

#### Player
- GET `/api/player/games` - Mavjud o'yinlar
- POST `/api/player/games/:gameId/register` - O'yinga ro'yxatdan o'tish

#### Notifications
- GET `/api/notifications` - Xabarlar ro'yxati
- PUT `/api/notifications/:notificationId/read` - Xabarni o'qilgan deb belgilash
- PUT `/api/notifications/read-all` - Barcha xabarlarni o'qilgan deb belgilash

## O'rnatish

1. Repositoriyani clone qiling
2. `npm install` buyrug'ini bajaring
3. `.env` faylini yarating (`.env.example` asosida)
4. MySQL database yarating
5. `npm run dev` - Development rejimida ishga tushirish

## Xavfsizlik

- Parollar bcrypt yordamida hashlangan
- JWT token autentifikatsiya
- Rate limiting
- Input validation
- CORS va Helmet himoyasi

## Notification Tizimi

Tizimda quyidagi holatlarda xabarlar yuboriladi:
- Yangi foydalanuvchi ro'yxatdan o'tganda
- Organizer yaratilganda
- Yangi o'yin yaratilganda
- Player o'yinga ro'yxatdan o'tganda

Xabarlar turli xil tiplarda bo'lishi mumkin: info, warning, success, error