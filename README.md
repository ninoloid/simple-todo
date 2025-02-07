## Materi singkat mengenai **HTML**, **CSS**, **JavaScript**, **Array**, dan **Todo List**

### 1. **HTML (Hypertext Markup Language)**

HTML adalah bahasa dasar yang digunakan untuk membuat struktur halaman web. HTML menggunakan "tag" untuk mengatur konten di halaman, seperti teks, gambar, video, dan elemen lainnya. Tag HTML memberi tahu browser bagaimana menampilkan konten.

Contoh HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Contoh HTML</title>
  </head>
  <body>
    <h1>Selamat datang di website saya!</h1>
    <p>Ini adalah paragraf pertama saya.</p>
  </body>
</html>
```

---

### 2. **CSS (Cascading Style Sheets)**

CSS adalah bahasa yang digunakan untuk mengatur tampilan atau gaya dari elemen-elemen HTML. CSS mengontrol elemen seperti warna, ukuran font, layout, margin, padding, dan masih banyak lagi. CSS membantu memisahkan konten dari tampilan.

Contoh CSS:

```css
body {
  background-color: lightblue;
}
h1 {
  color: darkblue;
  font-size: 36px;
}
```

---

### 3. **JavaScript**

JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web menjadi interaktif. Dengan JavaScript, kamu bisa menambahkan fitur seperti animasi, validasi formulir, manipulasi data, dan interaksi pengguna.

Contoh JavaScript:

```javascript
document.getElementById("demo").innerHTML = "Hello, World!";
```

Di sini, JavaScript mengubah konten HTML dari elemen dengan ID "demo".

---

### 4. **Array**

Array adalah struktur data yang digunakan untuk menyimpan sekumpulan data dalam satu variabel. Data dalam array biasanya memiliki tipe yang sama dan disusun secara berurutan. Array memudahkan pengelolaan data yang banyak dan memungkinkan akses cepat ke elemen-elemen tertentu dengan menggunakan indeks.

Contoh Array:

```javascript
let buah = ["Apel", "Jeruk", "Mangga"];
console.log(buah[0]); // Output: Apel
```

---

### 5. **Todo List**

**Todo List** adalah daftar tugas yang harus dilakukan. Dalam konteks aplikasi, todo list sering digunakan untuk membantu pengguna mencatat, mengorganisir, dan melacak tugas-tugas yang perlu diselesaikan. Biasanya, setiap tugas memiliki status (misalnya, selesai atau belum selesai), dan pengguna dapat menambahkan atau menghapus tugas sesuai kebutuhan.

Contoh penggunaan Todo List dalam kehidupan sehari-hari:

- **Manajemen Waktu:** Membantu untuk mencatat apa saja yang harus dilakukan pada hari itu (misalnya, bekerja, belajar, belanja).
- **Pengorganisasian:** Menjaga agar kamu tidak lupa menyelesaikan tugas-tugas penting seperti menghadiri rapat, mengirim email, atau menyelesaikan proyek.
- **Pencapaian Tujuan:** Dengan mencentang tugas yang selesai, kamu dapat melihat progres harian atau mingguan dan merasa lebih produktif.

Contoh aplikasi Todo List yang sederhana menggunakan HTML, CSS, dan JavaScript bisa seperti berikut:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Todo List</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 20px;
      }
      ul {
        list-style-type: none;
      }
      li {
        background: lightgray;
        margin: 5px 0;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <h1>Todo List</h1>
    <input type="text" id="task" placeholder="Tulis tugas baru" />
    <button onclick="addTask()">Tambah</button>
    <ul id="todo-list"></ul>

    <script>
      function addTask() {
        let task = document.getElementById("task").value;
        if (task) {
          let li = document.createElement("li");
          li.textContent = task;
          document.getElementById("todo-list").appendChild(li);
          document.getElementById("task").value = ""; // Kosongkan input
        }
      }
    </script>
  </body>
</html>
```

Dengan aplikasi Todo List, kamu bisa mencatat dan mengatur tugas dengan lebih terstruktur dalam kehidupan sehari-hari!
