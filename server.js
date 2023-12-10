const express = require('express')
const fs = require('fs');

const app = express()
const port = 3000

app.get('/location', (req, res) => {
    // Membaca file JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Terjadi kesalahan saat membaca file');
        }
    
        // Mengurai data JSON
        const jsonData = JSON.parse(data);
    
    // Mengirim data kota
    res.json(jsonData);
  });
})

app.get('/location/city=:city', (req, res) => {
    // Membaca file JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Terjadi kesalahan saat membaca file');
        }
    
        // Mengurai data JSON
        const jsonData = JSON.parse(data);
        
        // Mencari semua data berdasarkan kota
        const cityData = jsonData.filter(item => item.city.toLowerCase() ===  req.params.city.toLowerCase());

        if (!cityData) {
          return res.status(404).send('Data tidak ditemukan');
        }
    
    // Mengirim data kota
    res.json(cityData);
  });
})


app.get('/location/category=:category', (req, res) => {
    // Membaca file JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Terjadi kesalahan saat membaca file');
        }
    
        // Mengurai data JSON
        const jsonData = JSON.parse(data);
        
        // Mencari semua data berdasarkan kota
        const categoryData = jsonData.filter(item => item.category.toLowerCase() ===  decodeURIComponent(req.params.category));

        if (!categoryData) {
          return res.status(404).send('Data tidak ditemukan');
        }
    
    // Mengirim data kota
    res.json(categoryData);
  });
})

app.get('/location/rating=:rating', (req, res) => {
    // Membaca file JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Terjadi kesalahan saat membaca file');
        }
    
        // Mengurai data JSON
        const jsonData = JSON.parse(data);
        
        // Mencari semua data berdasarkan kota
        const ratingData = jsonData.filter(item => item.rating ==  Number(req.params.rating));

        if (!ratingData) {
          return res.status(404).send('Data tidak ditemukan');
        }
    
    // Mengirim data kota
    res.json(ratingData);
  });
})

app.get('/location/price=:price', (req, res) => {
    // Membaca file JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Terjadi kesalahan saat membaca file');
        }
    
        // Mengurai data JSON
        const jsonData = JSON.parse(data);
        
        // Mencari semua data berdasarkan kota
        const priceData = jsonData.filter(item => item.price ==  Number(req.params.price));

        if (!priceData) {
          return res.status(404).send('Data tidak ditemukan');
        }
    
    // Mengirim data kota
    res.json(priceData);
  });
})

app.get('/location/name=:name', (req, res) => {
    // Membaca file JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Terjadi kesalahan saat membaca file');
        }
    
        // Mengurai data JSON
        const jsonData = JSON.parse(data);
        
        // Mencari semua data berdasarkan kota
        const nameData = jsonData.filter(item => item.name.toLowerCase() == decodeURIComponent(req.params.name));

        if (!nameData) {
          return res.status(404).send('Data tidak ditemukan');
        }
    
    // Mengirim data kota
    res.json(nameData);
  });
})

app.get('/location/city=:city&rating=:rating', (req, res) => {
    // Membaca file JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Terjadi kesalahan saat membaca file');
        }
    
        // Mengurai data JSON
        const jsonData = JSON.parse(data);
        
        // Mencari semua data berdasarkan kota
        const cityDistrictData = jsonData.filter(item => item.city.toLowerCase() ===  decodeURIComponent(req.params.city) && item.rating ==  decodeURIComponent(Number(req.params.rating)));

        if (!cityDistrictData) {
          return res.status(404).send('Data tidak ditemukan');
        }
    
    // Mengirim data kota
    res.json(cityDistrictData);
  });
})

app.get('/location/city=:city&category=:category', (req, res) => {
    // Membaca file JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Terjadi kesalahan saat membaca file');
        }
    
        // Mengurai data JSON
        const jsonData = JSON.parse(data);
        
        // Mencari semua data berdasarkan kota
        const cityDistrictData = jsonData.filter(item => item.city.toLowerCase() ===  decodeURIComponent(req.params.city) && item.category ==  decodeURIComponent(req.params.category));

        if (!cityDistrictData) {
          return res.status(404).send('Data tidak ditemukan');
        }
    
    // Mengirim data kota
    res.json(cityDistrictData);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})