#  Plataforma de Gestión de Microcréditos

Aplicación Full Stack desarrollada como solución para la gestión de microcréditos entre comercios y clientes finales.

El sistema permite autenticación de usuarios con roles diferenciados, creación de créditos desde comercios y consulta de créditos por parte de los clientes.

---

##  Tecnologías Utilizadas

### Backend
- Python 3.11
- Django
- Django REST Framework
- SimpleJWT (Autenticación JWT)
- PostgreSQL

### Frontend
- React
- React Router
- Axios

---

##  Arquitectura

La aplicación sigue una arquitectura desacoplada:


- El frontend consume la API REST mediante JWT.
- El backend maneja autenticación, autorización y lógica de negocio.
- PostgreSQL almacena los datos de usuarios y microcréditos.

---

##  Roles del Sistema

El sistema implementa control por roles:

### CLIENT
- Puede iniciar sesión.
- Puede consultar únicamente sus propios créditos.

### MERCHANT
- Puede iniciar sesión.
- Puede crear créditos para clientes.
- Puede consultar los créditos creados por él.

### ADMIN
- Puede visualizar todos los créditos.
- Puede visualizar todos los usuarios del sistema.

---

##  Autenticación

Se implementa autenticación basada en JWT utilizando `djangorestframework-simplejwt`.

Flujo:

1. Usuario envía email y contraseña.
2. Backend valida credenciales.
3. Se genera un token JWT.
4. El frontend almacena el token.
5. Cada petición posterior incluye:


---

##  Modelo de Datos

### User (Custom User Model)

- email (único)
- role (CLIENT / MERCHANT / ADMIN)

Se utiliza email como campo principal de autenticación.

---

### Credit

- amount
- term_months
- status
- created_at
- customer (FK → User)
- created_by (FK → User)

Relación:
- Un comercio crea un crédito.
- Un cliente recibe el crédito.

---

##  Funcionalidades Implementadas

✔ Login de usuarios  
✔ Autenticación JWT  
✔ Creación de microcréditos desde comercio  
✔ Dashboard/listado de créditos  
✔ Consulta de créditos por usuario  
✔ Control de acceso por roles  
✔ Módulo básico administrativo  

---

##  Instalación y Ejecución

---

###  1. Clonar repositorio

```bash
git clone <repo-url>
cd microcreditos

```
##  2. Backend
cd backend

python -m venv venv
venv\Scripts\activate   # Windows

pip install -r requirements.txt

python manage.py migrate
python manage.py runserver
http://127.0.0.1:8000

##  3. Frontend

cd frontend
cd frontend

npm install
npm start

http://localhost:3000


## 4. mejoras a futuro

Validaciones avanzadas en formularios.

Paginación en listados.

Métricas de dashboard (total créditos, monto total).

Mejoras visuales y UX.

Permisos más granulares.

Despliegue en entorno cloud (AWS / Docker).