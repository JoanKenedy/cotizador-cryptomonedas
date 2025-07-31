# Cotizador de Criptomonedas

Una aplicación web moderna desarrollada con React y TypeScript que permite consultar el precio en tiempo real de las principales criptomonedas en diferentes monedas fiduciarias.

## Características

- Consulta precios en tiempo real de las top 20 criptomonedas por capitalización de mercado
- Soporte para múltiples monedas (USD, EUR, GBP, MXN)
- Interfaz rápida y responsiva
- Spinner de carga con animación personalizada
- Información detallada del precio incluyendo cambios porcentuales
- Validación de formularios con manejo de errores


## Tecnologías Utilizadas

### Frontend
- **React 19.1.0** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript 5.8.3** - Superset tipado de JavaScript
- **Vite 5.2.10** - Herramienta de construcción rápida

### Estado y Datos
- **Zustand 5.0.7** - Librería ligera para manejo de estado
- **Axios 1.11.0** - Cliente HTTP para realizar peticiones a la API
- **Zod 4.0.14** - Validación de esquemas TypeScript-first

### Herramientas de Desarrollo
- **ESLint** - Linter para JavaScript/TypeScript
- **Vite Plugin React SWC** - Plugin para React con compilador SWC

## Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/JoanKenedy/cotizador-cryptomonedas.git
   cd criptomonedas-react-typescript
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el proyecto en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:5173
   ```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la construcción de producción
- `npm run lint` - Ejecuta ESLint para verificar la calidad del código

## 🏗️ Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── CriptoSearchForm.tsx   # Formulario de búsqueda
│   ├── CryptoPriceDisplay.tsx # Mostrar resultados
│   ├── ErrorMessage.tsx       # Componente de errores
│   └── Spinner.tsx            # Indicador de carga
├── data/                 # Datos estáticos
│   └── index.ts         # Lista de monedas disponibles
├── schema/              # Esquemas de validación Zod
│   └── crypto-schema.ts # Validaciones de tipos
├── services/            # Servicios de API
│   └── CryptoService.ts # Llamadas a CryptoCompare API
├── types/               # Definiciones de tipos TypeScript
│   └── index.ts        # Tipos exportados
├── store.ts             # Store global con Zustand
├── App.tsx              # Componente principal
├── App.css              # Estilos principales
├── Spinner.css          # Estilos del spinner
└── main.tsx             # Punto de entrada
```

## 🔌 API

Este proyecto utiliza la [CryptoCompare API](https://www.cryptocompare.com/api/) para obtener:

- **Lista de criptomonedas**: Top 20 por capitalización de mercado
- **Precios en tiempo real**: Precios actuales con información detallada

### Endpoints utilizados:
- `GET /data/top/mktcapfull?limit=20&tsym=USD` - Lista de criptomonedas
- `GET /data/pricemultifull?fsyms={crypto}&tsyms={currency}` - Precio específico

## Funcionalidades Clave

### Búsqueda de Precios
- Selecciona una moneda fiduciaria (USD, EUR, GBP, MXN)
- Selecciona una criptomoneda de la lista
- Obtén información detallada del precio en tiempo real

### Información Mostrada
- Precio actual
- Cambio en las últimas 24 horas (absoluto y porcentual)
- Precio máximo y mínimo del día
- Última actualización

### Manejo de Estado
El proyecto utiliza Zustand para un manejo de estado simple y eficiente:
- Estado de carga
- Lista de criptomonedas
- Resultado de la consulta

## Estilos

- CSS personalizado con variables CSS para temas
- Animaciones suaves para el spinner de carga


## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request


## Agradecimientos

- [CryptoCompare](https://www.cryptocompare.com/) por proporcionar la API
- [Vite](https://vitejs.dev/) por la excelente herramienta de desarrollo
- [Zustand](https://zustand.surge.sh/) por el manejo de estado simple
- [Zod](https://zod.dev/) por la validación de tipos

---

⭐ ¡Si te gusta este proyecto, no olvides darle una estrella en GitHub!
