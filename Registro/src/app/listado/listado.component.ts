import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
  empleados: any[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
      this.empleadoService.obtenerEmpleados().subscribe(data => {
          this.empleados = data;
      });
  }

  eliminarEmpleado(id: string): void {
      this.empleadoService.eliminarEmpleado(id).subscribe(() => {
          this.empleados = this.empleados.filter(emp => emp._id !== id);
      });
  }
}
