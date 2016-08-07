import 'angular'
import 'angular-mocks/angular-mocks'

let context = require.context('./src', true, /\.spec\.js/)
context.keys().forEach(context)
