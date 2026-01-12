/* 35. TypeScript va Patternlar

Dars Rejasi:
    1. Compiled va interprated tillarni o'rganamiz hamda ularning o'zaro solishtirma tahlili
    2. Typescript nima va uning mavjudga kelishi bizga qanday muammolarni hal qilib berdi
    3. Typescript dynamic typing va interfacelar tushunchasi
    4. Burak backend loyihamizni typescripda quramiz
    5. Patternlarni o'rganamiz va architecture va dizayn patternlarga tuxtalib o'tamiz

1. Compiled Languages: Java, Golang, C, C++, C#, Rust       =>      Compiling & Running
    --> Compiled tillarda dastlab hamma code computer tiliga ogirilib keyin run boladi. 
        Agar compile jarayonida qanaqadur xatolik bolsa u code larni run qilib otirmidi.
    
2. Interpreted Languages: NodeJS, Python, PHP, Ruby         =>      Running
    --> Interpreted tillarda code birdaniga run bolishni boshlidi va qayerdadur xatolik bolsa osha joyda toxtab qoladi va 
        qolgan code (mantiq) larni ishga tushurmidi (run qilmidi). Aynan shu kamcjilik NodeJS ning eng og'riqli nuqtasi bolgan.


3. TypeScript O'zi Nima?
    --> Aynan compiled languages da mavjud bolgan static type larga oxshash dynamic type larni NodeJS ga olib kirgan.
        Qisqa qilib aytganda, bu NodeJS ga type tushunchasini olib kirgan

    --> Formula: TypeScript = JavaScript + Typescript unsurlari (o'ziga tegishli bolgan elementlari va componentlari) dan iborat.

    --> TSC va JS qanday ishlaydi => Biz source ni tsc da yozamiz lekin u compile jarayonini hosil qilib beradi 
        (xuddi compiled languages kabi) va biz yozgan code JS ga to'liq o'giriladi


4. Dynamic Types va Interface tushunchasi
    --> Interface: Object sigari instance ga ega bolmaydi, ular shunchaki bir type uchun hizmat qiladigan soyadir.

    --> Type larni interface yoki togridan togri type orqali hosil qilish ham mumkin. Lekin bizning method interface lar orqali type larni
        hosil qilish. Sababi, bu bizga kop imkoniyat beradi. 

    --> https://www.typescripttutorial.net/ alohida ko'rib oragnib ol


5. So'ngi so'z: Bu darsda TypeScriptga oid dynamic type turlari hamda type larni yasashda yordamga keladigan interface tushunchalari o'rganildi.
*/
