import { Pipe, PipeTransform } from '@angular/core';

interface Props {
  toUpper?: boolean;
}

export const DEFAULT_PROPS: Props = {
  toUpper: false,
};

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, props: Partial<Props> = DEFAULT_PROPS): string {
    return props.toUpper ? value.toUpperCase() : value.toLocaleLowerCase();
  }
}
