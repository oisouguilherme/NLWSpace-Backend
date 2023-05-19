/* eslint-disable prettier/prettier */
import 'dotenv/config'

import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import { authRoutes } from './routes/Auth'
import jwt from '@fastify/jwt'
const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app.listen({
  port:3333,
}).then(()=> {
  console.log("Servidor HTTP")
})