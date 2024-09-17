/*
share photo using atrategy pattern
*/

interface SharePhotoInterface {
  share(): void;
}

class TextShareBehaviour implements SharePhotoInterface {
  share(): void {
    console.log("Photo is shared via text");
  }
}

class EmailShareBehaviour implements SharePhotoInterface {
  share(): void {
    console.log("Photo is shared via email");
  }
}

class SocialShareBehaviour implements SharePhotoInterface {
  share(): void {
    console.log("Photo is shared via social media");
  }
}

abstract class PhoneCameraApp {
  protected sharePhotoBehaviour!: SharePhotoInterface;
  performShare() {
    this.sharePhotoBehaviour.share();
  }
  take() {}
  save() {}
  abstract edit(): void;
}

class GooglePixel extends PhoneCameraApp {
  constructor() {
    super();
    this.sharePhotoBehaviour = new SocialShareBehaviour();
  }

  edit(): void {
    console.log("enjoy pixel editing");
  }
}

const pixel6a = new GooglePixel();
pixel6a.performShare();
