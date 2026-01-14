/* 36. Environmental variable lar va loyihamiz uchun yangi database

Dars Rejasi:
    1. Environmental variable larni integratsiyasini amalga oshiramiz
    2. Burak loyihasi uchun yangi database xosil qilamiz


1. Environmental variable lar o'zi nega kerak?
    --> Bizda boladigan ayrim maxfiy datalarni GitHubga mutlaqo joylashtirishimiz mumkin emas
        MISOL: Database connection linkimiz

        .env ni ishlatishimiz uchun bizga maxsus package kerak boladi. INSTALLED as: npm i dotenv@16.0.0


2. ------> dotenv.config() <-------
**Bu buyruq:**
    1. .env faylini topadi
    2. Ichidagi barcha qatorlarni o'qiydi
    3. Ularni `process.env` ga qo'shadi

**Misol:**
    **.env fayli:**
    PORT=3003
    DB_NAME=burak
    API_KEY=secret123


-------> dotenv.config() quyidagilarni qiladi: <-------
    .env faylini topadi ✅
    Ichidagi har bir qatorni o'qiydi ✅
    KEY=VALUE formatini ajratadi ✅
    process.env obyektiga qo'shadi ✅


-------> Eng oddiy qilib: <-------
    dotenv.config() - bu .env faylidagi narsalarni global xotiraga (process.env) ko'chirib qo'yish! 
    Shundan keyin istalgan joydan foydalanishingiz mumkin! 📋→💾



3. Database Korinishi:
    CLUSTER => DATABASE => COLLECTION => DOCUMENT
*/

/* 37. Mongoose vs Express

Dars Rejasi:
    1. MongoDBga Mongoose orqali ulanamiz
    2. Loyihamizga Express ni o'rnatamiz


--> mongoose ni organamiz
    Bu Nima: Mongoose bu MongoDB bilan ishlash uchun hosil qilingan maxsus package hisoblanadi.

    Ishlatishga Sabab: Mongoose juda qulay (keng) imkoniyatlarni beradi. 
    MISOL: SQL singari tablega oxshagan datalarni Mongoose ning schemalari orqali hozil qilamiz.


*/
