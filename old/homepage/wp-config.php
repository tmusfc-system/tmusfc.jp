<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link http://wpdocs.osdn.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define('DB_NAME', 'LAA0046581-xtd0yk');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'LAA0046581');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', 'je5STCve');

/** MySQL のホスト名 */
define('DB_HOST', 'mysql153.phy.lolipop.lan');

/** データベースのテーブルを作成する際のデータベースの文字セット */
define('DB_CHARSET', 'utf8');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'TexLX~J.s4&^g$"9sB>[kU/1vf!m.#9^Qr3jEZq)yALI<w5l8=0L|T/kM:0eMg,~');
define('SECURE_AUTH_KEY', '9s^rM"TQT+WnAVb{BxTq{qrr@jM,~q5-K5$K:.+=G][!Gtd{=$JGr)|"UirC-wO^');
define('LOGGED_IN_KEY', 'O-%dp<+H:Kd;*mf0;uwUgWt78kl|=zz<>h)#:T,K75-GVM)u25cO(:]~]C$VE/5}');
define('NONCE_KEY', '?H_#|uomoyEI,Df.2z(|08U~Q`B"Z~US-()SV=q3EDyZIn4C]gaB)8mW-i"/3dHi');
define('AUTH_SALT', 'cdK?tsz/J~_fnm]O;WZ9~Bg2oh;,%uid)NETQ>o;G[EfJN$zzjNpF_?@D>R&C"o5');
define('SECURE_AUTH_SALT', 'LGPvKTQ9u=D%U;Uc72T`P~t5qp=,I`4B7Vp(PC1.ol@M}SSF{Y];+cU<V2ef/+w@');
define('LOGGED_IN_SALT', 'r8C$BfArD["`0Vbm[LV[U3Z^&p%K8Xt[N<fy&/Z8w&r@7X(OY4,!+MttL%(1fxd3');
define('NONCE_SALT', '^FFQp,@gHoo#b04h)-n{NO![^4blXKnra&h%FlNie$xzR(eM3A|*K9t*fU@)_|rx');

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix  = 'mnnqa_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数については Codex をご覧ください。
 *
 * @link http://wpdocs.osdn.jp/WordPress%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%B0
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
  define('ABSPATH', dirname(__FILE__) . '/');
}

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
