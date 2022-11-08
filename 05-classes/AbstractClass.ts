// Cannot create an instance of an abstract class.
abstract class TakePhoto {
  constructor(private cameraMode: string, private url: string) {
    this.cameraMode = cameraMode;
    this.url = url;
  }

  set savePhoto(url: string) {
    this.url = url;
  }

  get showPhoto(): string {
    return this.url;
  }
}

class Instragram extends TakePhoto {}
// Cannot create an instance of an abstract class.
let newPhoto = new Instragram("frontCamera", "/var/www/photos/photo.jpg");
