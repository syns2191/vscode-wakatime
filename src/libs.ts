export class Libs {
  public static quote(str: string): string {
    if (str.includes(' ')) return `"${str.replace('"', '\\"')}"`;
    return str;
  }

  public static validateKey(key: string): string {
    const err = 'Invalid api key... check https://wakatime.com/settings for your key';
    if (!key) return err;
    // const re = new RegExp(
    //   '^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$',
    //   'i',
    // );
    if (key !== 'gauzy-799') return err;
    return '';
  }

  public static validateProxy(proxy: string): string {
    const err =
      'Invalid proxy. Valid formats are https://user:pass@host:port or socks5://user:pass@host:port or domain\\user:pass';
    if (!proxy) return err;
    let re = new RegExp('^((https?|socks5)://)?([^:@]+(:([^:@])+)?@)?[\\w\\.-]+(:\\d+)?$', 'i');
    if (proxy.indexOf('\\') > -1) re = new RegExp('^.*\\\\.+$', 'i');
    if (!re.test(proxy)) return err;
    return '';
  }
}
