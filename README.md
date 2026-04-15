# MyBusiness — Tienda & Gestión de Stock

App web funcional para gestionar una tienda mixta (física + online) con cuatro módulos principales:

- **Dashboard** con KPIs (productos activos, valor de inventario, ventas 30d, stock bajo), top productos y ventas por canal.
- **Catálogo** con SKU, categorías, costo/precio, stock mínimo y filtros.
- **Movimientos** de entradas (compras a proveedor) y salidas (ventas) por canal físico/online, con actualización automática del stock.
- **Alertas** de stock bajo o agotado, con sugerencia de reposición.
- **Reportes** con ingresos, costo de ventas, margen bruto, ranking por margen y valor de inventario por categoría.

## Uso

Es una aplicación 100% client-side (un solo archivo HTML). Para usarla:

1. Abrir `index.html` en cualquier navegador moderno, o
2. Servirla con cualquier servidor estático (`python3 -m http.server`, etc.), o
3. Publicarla con GitHub Pages activando Pages sobre la rama `main`.

## Datos de ejemplo

La app inicia con datos demo de 8 productos de indumentaria. El botón **Reiniciar demo** restablece los datos. **Exportar datos** descarga un JSON con el estado actual.

> Nota: los datos viven solo en memoria del navegador (no se persisten al recargar). Próximo paso natural: agregar persistencia con backend o `IndexedDB`.

## Estructura

```
MyBusiness/
├── index.html          # App principal (entry point)
├── tienda-stock.html   # Copia del archivo principal
├── LICENSE
└── README.md
```

## Próximos pasos sugeridos

- Persistencia (backend o IndexedDB)
- Multiusuario y roles
- Lector de códigos de barras
- Integración con e-commerce (Tienda Nube, Mercado Shops, etc.)
- Facturación electrónica
