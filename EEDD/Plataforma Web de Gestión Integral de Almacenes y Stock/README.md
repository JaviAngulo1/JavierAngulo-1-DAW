# Plataforma de Administración Centralizada de Inventarios y Almacenes

## Requisitos del Sistema

### Requisitos Funcionales

| **ID** | **Requisito**                                                                                       | **Nivel de Prioridad** | **Origen**             | **Estado**     |
|--------|------------------------------------------------------------------------------------------------------|-------------------------|------------------------|----------------|
| F-01   | Permitir el alta de productos con detalles como código, nombre, medidas, lote y fecha de expiración | Alta                    | Cliente                | Esbozado       |
| F-02   | Gestionar distintos almacenes y sus zonas internas (como estanterías y áreas de picking)            | Media                   | Análisis Funcional     | Esbozado       |
| F-03   | Registrar operaciones de inventario como entradas, traslados, pérdidas y devoluciones                | Alta                    | Cliente                | Esbozado       |
| F-04   | Reflejar existencias en tiempo real y ofrecer un historial de movimientos                           | Alta                    | Cliente                | Esbozado       |
| F-05   | Crear solicitudes de envío para clientes o producción                                                | Media                   | Responsable logístico  | Esbozado       |
| F-06   | Producir listas de recogida con rutas de recolección eficientes                                     | Media                   | Parte interesada       | Esbozado       |
| F-07   | Validar la preparación, empaquetado y envío de productos                                             | Media                   | Cliente                | Esbozado       |
| F-08   | Vincularse con empresas de transporte para etiquetas y tracking                                     | Media                   | Departamento IT        | Esbozado       |
| F-09   | Lanzar alertas si las existencias bajan o superan ciertos límites                                   | Media                   | Cliente                | Esbozado       |
| F-10   | Informar sobre entregas retrasadas, diferencias o fechas próximas de vencimiento                    | Media                   | Política Interna       | Esbozado       |
| F-11   | Programar conteos de inventario regulares                                                            | Baja                    | Cliente                | Esbozado       |
| F-12   | Visualizar paneles con métricas clave: rotación, antigüedad, eficiencia                             | Alta                    | Dirección Operativa    | Esbozado       |
| F-13   | Posibilidad de exportar informes en formatos como PDF o CSV                                         | Media                   | Cliente                | Esbozado       |
| F-14   | Implementar seguridad por roles con autenticación de dos pasos                                      | Alta                    | Departamento IT        | Esbozado       |
| F-15   | Registrar acciones clave del sistema con hora, usuario y actividad                                  | Alta                    | Normativa              | Esbozado       |

### Requisitos No Funcionales

| **ID**  | **Descripción**                                                               | **Categoría**     | **Indicador**                | **Objetivo**              | **Notas**                                 |
|--------|--------------------------------------------------------------------------------|-------------------|------------------------------|---------------------------|-------------------------------------------|
| NF-01  | Las consultas de stock deben responder en menos de 2 segundos                 | Rendimiento       | Tiempo de respuesta          | < 2 seg                   | Probar regularmente bajo carga real       |
| NF-02  | Soportar al menos 500 usuarios conectados a la vez                            | Escalabilidad     | Sesiones simultáneas         | ≥ 500 usuarios            | Usar infraestructura escalable            |
| NF-03  | Cifrado de información crítica con tecnología AES-256                         | Seguridad         | Nivel de cifrado             | Obligatorio               | Cumplir ISO/IEC 27001                     |
| NF-04  | Autenticación reforzada para roles de privilegio                              | Seguridad         | Verificación en dos pasos    | Obligatoria               | Aplicar a perfiles administrativos        |
| NF-05  | Cumplir con el estándar WCAG 2.1 (nivel AA) en la interfaz                    | Usabilidad        | Accesibilidad                | Nivel AA                  | Auditoría externa recomendada             |
| NF-06  | Disponibilidad operativa mínima del 99,5 %                                    | Fiabilidad        | Tiempo en línea              | ≥ 99.5 %                  | Supervisión continua del sistema          |
| NF-07  | Informes mensuales generados en menos de 5 segundos                           | Rendimiento       | Tiempo de generación         | ≤ 5 segundos              | Validar con datos reales                  |
| NF-08  | Arquitectura abierta para conexión con sistemas ERP                           | Interoperabilidad | Compatibilidad con APIs REST | Soporte REST documentado | Usar especificaciones OpenAPI             |

## Casos de Uso

### Tabla Resumen

| **ID** | **Funcionalidad**                | **Usuario**              | **Requisito Previo**                          | **Procedimiento Principal**                                                                                   | **Variantes**                                                       | **Resultado Final**                                 |
|--------|----------------------------------|--------------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|------------------------------------------------------|
| CU-01  | Alta de producto                 | Encargado de almacén     | Usuario autenticado                           | Accede al formulario → ingresa datos → envía → sistema valida y almacena                                     | Datos erróneos: muestra aviso                                       | Producto registrado                                   |
| CU-02  | Modificación de stock            | Gestor de inventario     | Producto registrado                           | Selecciona producto → elige operación → ingresa cantidades → confirma                                        | Stock negativo: rechazo del ajuste                                  | Stock actualizado                                    |
| CU-03  | Solicitar envío                  | Área logística           | Producto disponible                           | Elige artículos y cantidades → destino → confirma                        | Stock insuficiente: mostrar aviso                                   | Orden creada y en espera                             |
| CU-04  | Optimizar picking                | Sistema                  | Orden registrada                               | Agrupa productos → ordena recorrido → genera documento                   | —                                                                    | Lista optimizada generada                          |
| CU-05  | Confirmar preparación            | Personal de almacén      | Picking realizado                              | Escanea artículos → empaqueta → marca como enviado                       | Producto faltante: aviso al encargado                              | Pedido marcado como despachado                      |
| CU-06  | Ver stock actual                 | Usuario general          | Sesión iniciada                               | Accede al panel → ve información actualizada                             | —                                                                    | Visualización completada                            |
| CU-07  | Alertas de inventario            | Sistema                  | Umbral alcanzado                              | Detecta variación → emite alerta y la comunica                           | —                                                                    | Alerta enviada                                      |
| CU-08  | Crear informe                    | Usuario                  | Datos disponibles                             | Establece filtros → selecciona tipo → exporta resultado                  | —                                                                    | Informe generado                                    |
| CU-09  | Gestionar roles y accesos        | Administrador            | Cuenta con permisos avanzados                 | Ingresa al panel → define permisos → guarda configuración                | —                                                                    | Configuración actualizada                          |
| CU-10  | Integración con transportistas   | Sistema                  | Pedido empaquetado                            | Crea etiqueta → llama API del operador logístico → recibe tracking       | Fallo API: notificar error                                          | Envío con seguimiento                              |
| CU-11  | Inventario cíclico               | Encargado de conteo      | Producto preparado para auditoría             | Escanea producto → introduce conteo real → sistema registra o reporta    | Error de lectura: repetir acción                                    | Stock ajustado o marcado                            |
| CU-12  | Visualizar métricas              | Supervisor                | Información histórica registrada              | Accede al panel → visualiza KPIs                                         | —                                                                    | Métricas disponibles para análisis                  |
| CU-13  | Registro de acciones             | Auditor                   | Se han realizado operaciones críticas         | Filtra por usuario, fecha o tipo de acción → revisa los detalles         | —                                                                    | Auditoría lista y consultable                      |

## Objetivos del Proyecto (SMART)

| **ID**   | **Meta**                                                                      | **Clasificación** | **Indicador**                    | **Fecha Límite** | **Encargado**            | **Estado**       |
|----------|-------------------------------------------------------------------------------|-------------------|----------------------------------|------------------|---------------------------|------------------|
| OBJ-01   | Digitalizar completamente entradas y salidas de mercancía                    | Estratégico       | % de procesos digitalizados      | 2025-05-13       | Dirección del Proyecto    | En desarrollo    |
| OBJ-02   | Disminuir errores de inventario en un 25 %                                   | Táctico           | Porcentaje de reducción          | 2025-05-13       | Área Técnica              | Pendiente        |
| OBJ-03   | Mantener disponibilidad mensual superior al 99 %                             | Operacional       | % de uptime                      | 2025-05-13       | Equipo DevOps             | Pendiente        |
| OBJ-04   | Reducir el tiempo de registro de productos a menos de 2 min                  | Operacional       | Tiempo medio (min)               | 2025-05-13       | Backend                   | En proceso       |
| OBJ-05   | Implementar sistema de alertas en tiempo real                                | Táctico           | Funcionalidad en producción      | 2025-05-13       | Área Técnica              | En desarrollo    |
| OBJ-06   | Mejorar eficiencia en picking un 30 % con rutas optimizadas                  | Estratégico       | % de mejora                      | 2025-05-13       | Logística / IT            | Pendiente        |
| OBJ-07   | Capacitar al 100 % del personal en el sistema en 1 mes                       | Operacional       | % de empleados capacitados       | 2025-05-13       | RRHH                      | Pendiente        |
| OBJ-08   | Integrar al menos 3 operadores logísticos                                    | Táctico           | Nº de integraciones              | 2025-05-13       | Área de Integraciones     | Pendiente        |
| OBJ-09   | Obtener una valoración ≥ 4 sobre 5 en satisfacción tras la implementación    | Estratégico       | Puntuación media de encuestas    | 2025-05-13       | UX / Atención al Cliente  | Pendiente        |
| OBJ-10   | Auditar la totalidad de acciones críticas del sistema                        | Operacional       | % de acciones trazadas           | 2025-05-13       | Auditoría / Seguridad     | Pendiente        |

## Trazabilidad de Requisitos

| **Req ID** | **Descripción del Requisito**              | **Objetivo Relacionado** | **Caso de Uso**                     | **Prueba Asociada**          |
|-----------|---------------------------------------------|---------------------------|-------------------------------------|-------------------------------|
| F-01      | Alta de productos                           | OBJ-01                    | CU-01: Alta producto                | TP-01                        |
| F-02      | Ajustes de inventario                       | OBJ-01, OBJ-02            | CU-02: Modificar stock              | TP-02                        |
| F-03      | Crear orden de salida                       | OBJ-01                    | CU-03: Solicitar envío              | TP-03                        |
| F-04      | Generar listas optimizadas                  | OBJ-03                    | CU-04: Picking                      | TP-04                        |
| F-05      | Confirmar envío                             | OBJ-01                    | CU-05: Confirmación envío           | TP-05                        |
| F-06      | Visualización de stock                      | OBJ-01, OBJ-02            | CU-06: Ver existencias              | TP-06                        |
| F-07      | Alertas automáticas                         | OBJ-02                    | CU-07: Avisos inventario            | TP-07                        |
| F-08      | Informes exportables                        | OBJ-04                    | CU-08: Crear informe                | TP-08                        |
| F-09      | Gestión de usuarios                         | OBJ-05                    | CU-09: Configuración roles          | TP-09                        |
| F-10      | Integración logística externa               | OBJ-03                    | CU-10: Integración con operadores   | TP-10                        |
| F-11      | Auditoría mediante conteo                   | OBJ-01                    | CU-11: Inventario cíclico           | TP-11                        |
| F-12      | KPIs y paneles de control                   | OBJ-04                    | CU-12: Visualizar métricas          | TP-12                        |
| F-13      | Registro de acciones                        | OBJ-05                    | CU-13: Auditoría                    | TP-13                        |
| NF-01     | Tiempo de respuesta óptimo                  | OBJ-03                    | Optimización de consultas           | TP-14                        |
| NF-02     | Adaptabilidad de la interfaz                | OBJ-03                    | UI responsive                       | TP-15                        |
| NF-03     | Protección de información                   | OBJ-05                    | TLS + AES                           | TP-16                        |
| NF-04     | Alta disponibilidad                         | OBJ-03                    | Arquitectura redundante             | TP-17                        |

stateDiagram-v2
  [*] --> Esperando
  Esperando --> Preparando : confirmar()
  Esperando --> Cancelado : cancelar() / avisar()
  Preparando --> Enviado : embalar() / asignarTracking()
  Enviado --> Recibido : entregar() / cerrar()
  Recibido --> [*]
  Cancelado --> [*]


sequenceDiagram
  actor Cliente
  participant Plataforma
  Cliente->>Plataforma: Buscar producto
  Plataforma->>Cliente: Mostrar coincidencias
  Cliente->>Plataforma: Seleccionar producto
  Plataforma->>Cliente: Ver detalles



