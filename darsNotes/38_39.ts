/* 38. Router vs Controller lar

Dars Rejasi:
    1. Routerlarni o'rganamiz
    2. MVC architectual pattern ni o'rganamiz
    3. Member controller larni hosil qilamiz 
    4. Restaurant controller larni hosil qilamiz

Lesson Flow:
1. router.ts nomli file ochib unda routinglarni hosil qildik. Va u fayli app.ts fileda chaqirib oldik

2. Bo'lim 2 da Architectural pattern lar haqida gaplashildi:
    1) Avval clientlar yani browserlar dan kelayotgan requist ni bizning router qabul qiladi
    2) Router esa controller ga yuzlanadi. Bu jarayonda controller bizga kelgan request taqdiri bilan shug'ullanadi. 
        Controller ning asosiy vazifasi boshqaruvdan iborat bolganligi uchun unga kop mantiq yozilmaydi.
    3) Controller lar, oz navbatida, tegishli service Modellarga request yuboradi => Malum bir vazifani bajar deydi
    4) Modellar biznes logic ham deyiladi, yani asosiy mantiqlar shu modellarda yoziladi. 
        Modellar 2 xil boladi (bu ikkalasi birga ishlidi): 
            1. Service Model (Controller uchun xizmat qiladi)
            2. Schema Model (Database bn bilan birgalikda ishlidi)
        => Ishlashi: 1. Schema Model orqali biz Database dan malumot CRUD qilamiz va uni natijasini Service Modelga Beramiz;
                     2. Service Model esa u malumotni Controllerga beradi
                     3. Controler lar oziga kelgan data ni View (ejs) ga beradi 
                     4. View esa tayyor HTML soutce ni controllerga uzatadi
                     5. Controller bolsa routerlar orqali bizning browserimizga yuboradi

3. Router dan kelgan malumotni Controller orqali handle qilish (boshqarish)
    Kerakli folder lar ochish: 1. controllers
                               2. models -> only for the service model
                               3. schema -> only for the schema model
                               4. libs > common.ts


=> ESLATMA: controllerlarni doim Object orqali hozil qilamiz


4. Commit dan so'ng:

Burak backend loyihamizni ozi nima uchun ishlatyabmiz?

Maqsadlar: 1. SPA bolmish burakni userlar uchun xizmat qiladigan React loyihamiz uchun REST API server sifatida ishlatamiz
           2. Backend loyihamizni adminka uchun => BSSR ejs dan foydalanib
*/

/* 39. Member - Schema Model

Dars Rejasi:
    1. Member Service Model aqida gaplashamiz
    2. Mongoose documentationidan Schema, Model, va Query tushunchalarini o'rganamiz
    3. Schema Member Model hosil qilamiz

Lesson Flow:
    1. models folderida Member.service.ts file ochildi

    ESLATMA: 1. biz service modellarimizni ham schema modellarimizni ham doim class lar orqali quramiz
             2. Mongoose da eng markaziy tushuncha Schema hisoblanadi
             3. Moongose ni eng yaxshi xislati Chained Query amaliyotini ozida joriy qilgan

    2. Member Service Model ichida ishlidigan Schema modelni quramiz

    ESLATMA: 1. Schemalarni 2 xil usulda qursa boladi => 1) Schema first methodi (biz foydalanadigan usul)
                                                         2) Code First methodi orqali

    3. libs folder da enums folderi ochildi
*/
