if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 
    'mongodb://admin:admin123@ds159263.mlab.com:59263/squishylibrary'}
} else {
  module.exports= {mongoURI: 'mongodb://localhost/vidjot-dev'}
}