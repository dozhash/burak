/* 46. Authentication - Sessions*

Dars rejasi:
    1. Session authentication jarayonini develop qilamiz
    2. Test maqsadida checkAuthSession APIni develop qilamiz
    3. Session ishlash mexanizmini muhokama etamiz
    4. Birgalikda logout APIni hozil qilamiz

Dars ketma-ketligi:
    1.1) Kerakli package larni o'rnatamiz:
        1. npm i connect-mongodb-session@3.1.1
        2. npm i @types/connect-mongodb-session -D
        3. npm i express-session@1.17.3
        4. npm i @types/express-session -D

    1.2) Birinchi `feat: integrate middleware sessions` commit:
        => app.ts file da session larni middleware sifatida integratsiya qildik

    2.1) Keyingi mantig'imiz: router-admin.ts fileda login hamda signup 
        jarayonida session larni hosil qilishni talab qilamiz.
    2.2) checkAuthSession api development bo'ldi

    3.1) Session auth jarayoni o'zi qanday ishlayabdi -> amaliy tahlih.
        --> cookie ning xislati: 
            1) har bir request ichiga ozini joylab oladi.
            cookie ni ichidagi sid ni oladi va db dagi session collection 
            ichida shu sid ni qidib agar mavjud bo'lsa kirib kelgan request 
            ichiga member datalarni joylab - bog'lab beradi.
            2) self destroy

    4.1) Logout API quramiz:
        --> Bu jarayon bizning sessionimizni tozalab berish uchun quriladi.

        res turlari: send | render | redirect | json


*/
