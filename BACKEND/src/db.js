import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/angular-app', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true

})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err))