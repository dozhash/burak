/* 40. Loyihamizning Standartlarini Quramiz

Dars Rejasi:
    1. Loyihamizning Standartlarini joriy qilamiz
    2. API request methodlari haqida gaplashamiz hamda postmanni siz bilan birga ishlatamiz

ESLATMA: MemberService -> member controllerga ham restaran controllerga ham birdek xizmat qiladi
         MemberService modelda Member Schema model ishlatiladi.

1-BO'LIM:
--> Loyihamizning Standartlari -> developing jarayonini biz uchun yengillashtiradi,
                              hamda jamoada birga ishlashimiz uchun muhum vositachi hisoblanadi.

    Bunga Misol qilib: 1. logging mehanizmi => console.log("goHoe") kabi bizga kelayotgan request holatini koramiz
                       2. errorlarni handle qilish mehanizmi => try catch dan foydalanib
                       3. serverga kelayotgan turli request lar type ni korish => morgan@1.10.0 && @types/morgan ni ornatib
                          kabi standartlar nazarda tutiladi

    libs/config.ts -> MORGAN_FORMAT config

    train.ts da yozilgan Project Standarts:
    - Logging Standards
    - Naming Standards:
        - function, method, variable => CAMEL ---> goHome
        - class => PASCAL                     ---> MemberService
        - folder => KEBAB                     ---> router-admin
        - css => SNAKE                        ---> button_style
    
    - Error Handling => loyihamizda sodir boladigan turli errorlarni handle qilish mehanizmi tushuniladi

2-BO'LIM:
--> request larimizning methodlari haqida:
                            post metodli requestlarni ko'rib chiqamiz:

ESLATMA: Browser by default faqat bitta methodga hizmat qiladi: get()

get() maqsadi --> shunchaki bizga bir page (malumot) ni chiqarib berishda ishlatiladi
post() maqsadi --> malumotni o'zgartirishda (mutation) ishlatiladi
                   => bu method ni test qilishda POSTMAN ishlatiladi

--> Response Turlari: send | json | redirect | end | render


*/
