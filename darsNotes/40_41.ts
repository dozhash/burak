/* 40. Loyihamizning Standartlarini Quramiz

Dars Rejasi:
    1. Loyihamizning Standartlarini joriy qilamiz
    2. API request methodlari haqida gaplashamiz hamda postmanni siz bilan birga ishlatamiz

ESLATMA: MemberService -> member controllerga ham restaran controllerga ham birdek xizmat qiladi
         MemberService modelda Member Schema model ishlatiladi.

1-BO'LIM:
--> Loyihamizning Standartlari -> developing jarayonini biz uchun yengillashtiradi,
                              hamda jamoada birga ishlashimiz uchun muhum vositachi hisoblanadi.

    Bunga Misol qilib: 1. logging mehanizmi => console.log("goHome") kabi bizga kelayotgan request holatini koramiz
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

/* 41. Member - Service Model (admin signup)

Dars Rejasi: 1. API o'zi nima va uning qanday turlari mavjud?
             2. Adminka loyihasi uchun mo'ljallangan signup API ni to'liq develop qilamiz

API - Aplication Programming Interface --> bu dasturlar bir-biri bilan gaplashishi uchun foydalanadigan umumiy tildir.

Eng ko'p ishlatiladigan API turlari: 1. Traditional API (Burak loyihamizda)
                                     2. Rest Api (Burak loyihamizda)
                                     3. GraphQL API

API REQUESTS:
    1. TYPE > Traditional API | Rest API | GraphQL API
    2. METHOD > GET | POST
    3. STRUCTURE > header | body

| API turi        | Kalit so‘z   | Nimani qaytaradi | Qanday bilasan               |
| --------------- | ------------ | ---------------- | ---------------------------- |
| Traditional API | **PAGE**     | HTML sahifa      | `render`, `redirect`, `form` |
| REST API        | **RESOURCE** | JSON data        | `res.json`, GET/POST/PUT     |
| GraphQL API     | **QUERY**    | So‘ralgan JSON   | `/graphql`, `query {}`       |

1️⃣ HTML sahifami? → Traditional
2️⃣ JSON + resource URL’mi? → REST
3️⃣ Bitta endpoint + query’mi? → GraphQL

Postman qanday ishlayabdi:  Postman
                                ↓ (HTTP request)
                            http://localhost:3000/login
                                ↓
                            Node + Express (server)
                                ↓
                            router → controller
                                ↓
                            console.log(req.body)

                            👉 VS Code terminalida chiqyapti 🎯

findOne().exec() --> Query lar ketma-ketligini to'xtatish maqsadida




*/
