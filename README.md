
# Virtual Wallet REST PROJECT

Este proyecto proporciona una API REST construida con **Node.js** y **Express**. La API actúa como intermediaria entre el cliente y un servicio SOAP en Laravel, simulando una billetera virtual. Permite registrar clientes, recargar saldo, realizar pagos, confirmar pagos y consultar el saldo de los clientes.

## Requisitos

- Node.js 16+
- npm para la administración de paquetes
- Axios para manejar las solicitudes HTTP al servicio SOAP

## Instalación

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone <URL del repositorio>
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd WalletRestProject
    ```

3. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

## Rutas de la API

Las siguientes rutas están disponibles en este proyecto REST para comunicarse con el servicio SOAP:

### 1. Registrar Cliente

- **Método**: `POST`
- **Ruta**: `/api/wallet/registrar`
- **Cuerpo**:
    ```json
    {
        "documento": "string",
        "nombres": "string",
        "email": "string",
        "celular": "string"
    }
    ```

### 2. Recarga de Billetera

- **Método**: `POST`
- **Ruta**: `/api/wallet/recargar`
- **Cuerpo**:
    ```json
    {
        "documento": "string",
        "celular": "string",
        "valor": "number"
    }
    ```

### 3. Iniciar Pago

- **Método**: `POST`
- **Ruta**: `/api/wallet/pagar`
- **Cuerpo**:
    ```json
    {
        "documento": "string",
        "celular": "string",
        "monto": "number"
    }
    ```

### 4. Confirmar Pago

- **Método**: `POST`
- **Ruta**: `/api/wallet/confirmar`
- **Cuerpo**:
    ```json
    {
        "sessionId": "string",
        "token": "number"
    }
    ```

### 5. Consultar Saldo

- **Método**: `GET`
- **Ruta**: `/api/wallet/consultar`
- **Parámetros**:
    - `documento`: string
    - `celular`: string

## Estructura de Respuesta

Todas las respuestas de la API REST siguen la misma estructura, consistente con el servicio SOAP:

```json
{
    "success": true,
    "cod_error": "00",
    "message_error": "Mensaje descriptivo",
    "data": {
        // Datos adicionales según la operación realizada
    }
}
```

- **success**: Indica si la operación fue exitosa (`true`) o fallida (`false`).
- **cod_error**: Código de error. `00` indica éxito; otros códigos indican errores específicos.
- **message_error**: Mensaje descriptivo del error o éxito de la operación.
- **data**: Contiene la información relevante para cada operación.

## Ejecución del Servidor

Para iniciar el servidor de desarrollo:

```bash
npm start
```

Por defecto, el servidor estará disponible en `http://127.0.0.1:3000`.

## Pruebas

Para probar los endpoints, se puede utilizar la collection *wallet-postman-collection.json* que está en la raíz del proyecto para importarla directamente en postman y probar cada funcionalidad.

## Notas

- Este proyecto requiere que el servicio SOAP en Laravel esté funcionando y accesible en la URL configurada en `baseURL` en el archivo `apiClient.js`.

