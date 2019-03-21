export class StyleUtil {
  public static styleCssInjector(id: string, document: Document, path: string) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = path;
    link.media = 'all';
    head.appendChild(link);
  }
}
