import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  loading: boolean = false
  ordenPublicaciones: string = 'recents';
  publicacion: string = '';
  posts: { text: string, createdAt: number, tiempoTranscurrido: string }[] = [];

  constructor(private cd: ChangeDetectorRef) { }


  ngOnInit(): void {
    // Actualizar el tiempo transcurrido cada minuto
    setInterval(() => {
      this.actualizarTiempo();
    }, 1000);


    // Recuperar las publicaciones desde localStorage
    const publicaciones = localStorage.getItem('posts');

    // Si se encontraron publicaciones en localStorage, asignarlas al arreglo `posts`
    if (publicaciones) {
      this.posts = JSON.parse(publicaciones);
    }
  }

  publicar() {


    if (this.publicacion.trim() !== '') {


      document.getElementById('close-modal-button')?.click(); // Cerrar modal

      this.loading = true
      setTimeout(() => {

        // Agregar la publicación al array de posts
        this.posts.unshift({ text: this.publicacion, createdAt: Date.now(), tiempoTranscurrido: '' });

        // Limpiar el valor de la publicación
        this.publicacion = '';

        // Guardar el arreglo actualizado en localStorage
        localStorage.setItem('posts', JSON.stringify(this.posts));

        this.loading = false
      }, 2000);

    }


  }


  eliminarPublicacion(index: number) {
    // Eliminar la publicación del arreglo `posts`
    this.posts.splice(index, 1);

    // Guardar el arreglo actualizado en localStorage
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }


  actualizarTiempo() {
    // Actualizar el tiempo transcurrido para cada publicación en el array posts
    this.posts.forEach((post) => {
      post.tiempoTranscurrido = this.tiempoTranscurrido(post.createdAt);
    });

    // Forzar la detección de cambios
    this.cd.detectChanges();
  }





  tiempoTranscurrido(createdAt: number): string {
    let diferencia = Date.now() - createdAt;
    let duracion = moment.duration(diferencia);
    if (duracion.asMinutes() < 1) {
      return 'A while ago';
    } else if (duracion.asHours() < 1) {
      let minutos = Math.floor(duracion.asMinutes());
      return `${minutos} ${minutos == 1 ? 'minute' : 'minutes'} ago`;
    } else if (duracion.asDays() < 1) {
      let horas = Math.floor(duracion.asHours());
      return `${horas} ${horas == 1 ? 'hour' : 'hours'} ago`;
    } else {
      let dias = Math.floor(duracion.asDays());
      return `${dias} ${dias == 1 ? 'day' : 'days'} ago`;
    }
  }

  ordenarPublicaciones() {
    if (this.ordenPublicaciones === 'recents') {
      this.posts.reverse();
    } else {
      this.posts.reverse();
    }
  }


}
