import express from 'express'
import path from 'path'  // node内置模块，处理文件路径
import favicon from 'serve-favicon'
import logger from 'morgan'  // HTTP request logger middleware for node.js
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import routes from './routes/index'
let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))  //
app.set('view engine', 'hbs')   // hbs : handlebars模板

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

export default app