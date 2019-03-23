export class ScriptUtil {
  public static scriptJsInjector(id: string, document: Document, path: string) {
    const head = document.getElementsByTagName('body')[0];
    const script = document.createElement('script');
    script.id = id;
    script.type = 'text/javascript';
    script.src = path;
    head.appendChild(script);
  }
}
