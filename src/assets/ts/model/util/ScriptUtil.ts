export class ScriptUtil {
  public static scriptJsInjector(document: Document, path: string) {
    const head = document.getElementsByTagName('body')[0];
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = path;
    head.appendChild(script);
  }
}
