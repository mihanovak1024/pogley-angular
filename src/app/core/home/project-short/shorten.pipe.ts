import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorten"
})
export class ShortenPipe implements PipeTransform {

  transform(value?: string) {
    if (value !== undefined && value.length > 80) {
      return value.substring(0, 80) + '...';
    }
    return value;
  }

}
