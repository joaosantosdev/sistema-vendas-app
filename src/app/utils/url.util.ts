import {environment} from '../../environments/environment';

export class UrlUtil {
  public static getImage(name): string {
    return `${environment.baseUrl}/files/images?name=${name}.jpg`;
  }


}
