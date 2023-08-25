## 1. Instalar NextJS

## 2. Utilizar una estructura de carpetas para ordernar nuestro codigo.

## 3. Cambiamos el puerto

## 4. Instalar redux/toolkit y realizar la configuracion de RTK Query

- Creamos la apis (vacias) correspondientes a la ruta en el backend.
- Definimos los tipados para saber que datos estamos enviando o recibiendo.
- Creamos nuestro store
- Creamos un provider, que es el que va a agregar el store en el layout
- Agregamos el store a nuestro layout principal dentro del body.
- Luego en aquellas pages que van a hacer uso del store se debe agregar 'use client' al inicio del documento.

## 5. Configurar las apis.

- Enviroment
  - Para empezar debemos de establecer la Url de nuestra api, eso lo haremos en nuestro archivo de enviorment.
~~~dotenv
NEXT_PUBLIC_API_URL=http://localhost:3000
~~~
- Configuracion inicial para las apis:
~~~ts
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ILogin, LoginResponse} from "@/types/Auth";

const { NEXT_PUBLIC_API_URL } = process.env
// Define a service using a base URL and expected endpoints

export const {nombre de la api} = createApi({
    reducerPath: `{nombre de la api}`,
    baseQuery: fetchBaseQuery({ baseUrl: `${NEXT_PUBLIC_API_URL}/{ruta base de la api}` }),
    endpoints: (builder) => ({
        // Endpoints
        }),
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  } = {nombre de la api}
~~~
### Authentication

Dentro de la api de auth, debemos de agregar la configuracion RTK, entonces colocamos el nombre de la api y la ruta base. Quedaria algo asi:
~~~ts
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ILogin, LoginResponse} from "@/types/Auth";

const { NEXT_PUBLIC_API_URL } = process.env
// Define a service using a base URL and expected endpoints

export const authApi = createApi({
    reducerPath: `authApi`,
    baseQuery: fetchBaseQuery({ baseUrl: `${NEXT_PUBLIC_API_URL}/auth` }),
    endpoints: (builder) => ({
        // Endpoints
        }),
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  } = authApi
~~~
 
Primero vamos a construir el metodo de login,  debemos hacer la peticion a la ruta auth/login.
* Nota: Los endpoints de cambios (post/path/delete) son construidos como: mutation.
* Nota 2: Para agregar tipado al builder, primero pasamos el tipado de la respuesta de la query, y como segundo el tipado de los parametros que recibe el metodo.

Para el metodo login, va a responder con un access_token, y el metodo va a recibir la data del formulario del login.
Luego construimos la query, esta tendra como url '/login', esta se anexara a nuestra url base. El metodo sera POST ya que asi lo indica la api en backend y por ultimo el contenido que se enviara por el body sera la data del formulario. 
~~~ts
login: builder.mutation<LoginResponse,ILogin>({
            query: (loginData) => ({
                url: `/login`,
                method: 'POST',
                body: loginData,
            }),
        })
~~~
Luego de haber construido este metodo, RTK automaticamente habilitara un hook para utilizar el metodo y para utilizarlo en nuestro codigo debemos exportarlo.

* Nota: El hook de mutation generado tenda como prefijo 'use' y como sufijo 'Mutation'
* Nota 2: Los hooks siempre estaran en camelCase.

~~~ts
export const { useLoginMutation } = authApi
~~~

Luego de exportarlo, podemos utilizarlo en cualquier parte de nuestro codigo, en este caso en nuestro componente de "LoginForm.tsx"
* Nota: Las mutations devuelven un array, el primero elemento es el metodo de fetch, y el segundo es el resultado de la peticion
* Nota 2: Es un array para darnos la facilidad de nombrar el metodo como nosotros queramos.
* Nota 3: El resultado, es un objeto con la informacion de la peticion y algunos booleanos utiles. [RTK result](https://redux-toolkit.js.org/rtk-query/usage/queries#frequently-used-query-hook-return-values)

~~~ts
const [login, {data, isSuccess}] = useLoginMutation()
~~~

Haciendo uso de nuestros conocimientos en React, ejecutamos este metodo luego de hacer submit al formulario, enviando la informacion del mismo.
Y aprovecharemos el "isSuccess" como dependencia de un useEffect para guardar el token obtenido en el cache y redirigirnos a la sala de chat.
* Nota: La redirección se realizara con el hook: useRouter de la dependencia "next/navigation"

~~~tsx
const router = useRouter()

const handleSubmit = (event: FormEvent) => {
  event.preventDefault()
  login(loginData)
}

// some logic //

useEffect(() => {
  if(data?.access_token) {
    console.log(data)
    setAccessToken(data)
    router.push('/chat_room')
  }
}, [isSuccess]);
~~~



