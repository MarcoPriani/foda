class Fortalezas{

    constructor(fidelizacionClientes, capacidadInversion, retornoGanancia){
    
    this.fidelizacionClientes = fidelizacionClientes,
    
    this.capacidadInversion = capacidadInversion,
    
    this.retornoGanancia = retornoGanancia,
    
    this.total = fidelizacionClientes + capacidadInversion +retornoGanancia;
    
    }
  }

class Debilidades {
    constructor(personalNoCapacitado,malaUbicacion,disminucionCalidad){
        
        this.personalNoCapacitado = personalNoCapacitado;
        
        this.malaUbicacion = malaUbicacion;
        
        this.disminucionCalidad = disminucionCalidad;

        this.total = personalNoCapacitado + malaUbicacion + disminucionCalidad;
    }
}

class Oportunidades {
    constructor(crecimientoIndustria,bajosImpuestos,participacionEvento){
        
        this.crecimientoIndustria = crecimientoIndustria;
        
        this.bajosImpuestos = bajosImpuestos;
        
        this.participacionEvento = participacionEvento;

        this.total = crecimientoIndustria, bajosImpuestos, participacionEvento;
    }
}

class Amenazas {
    constructor(aumentoCompetencia,aumentoInsumos,leyes){

      this.aumentoCompetencia = aumentoCompetencia;

      this.aumentoInsumos = aumentoInsumos;

      this.leyes = leyes;

      this.total = aumentoCompetencia + aumentoInsumos + leyes;
    }
}

if ((Fortalezas.total > Debilidades.total)&&(Oportunidades.total > Amenazas.Total)){
    const crecimiento = [
        "Estrategia Ofensiva",
        "Desarrollo de nuevos productos", 
        "Desarrollo de nuevos mercados",
        "Integraciones",
        "Fusiones y adquisiciones",                            
    ]
}
else if ((Debilidades.total > Fortalezas.total)&&(Amenazas.total > Oportunidades.total)){
    const estrategiaSupervivencia = [
        "Venta de activos improductivos",
        "Recorte de la cartera de productos",
        "Resizing (Redimensionar el tamaño de la empresa a partir de los procesos)",    
    ]
}

else if ((Fortalezas.total > Debilidades.total)&&(Amenazas.total > Oportunidades.total)){
    const defensa = [
        "Estrategia de reorientación",
        "Venta de activos improductivos",
        "Recorte de la cartera de productos",
        "Resizing (Redimensionar el tamaño de la empresa a partir de los procesos)",    
    ]
}

else if ((Debilidades.total > Fortalezas.total)&&(Oportunidades.total > Amenazas.total)){
    const Reenfoque = [
        "Estrategia de asosiación",
        "Mejora de la cartera de productos",
        "Mejora de la calidad de los productos",
        "Mejora de la gestión de recursos humanos",
    ]
}

