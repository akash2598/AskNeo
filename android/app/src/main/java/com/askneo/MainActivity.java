
package com.askneo;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // add this
import android.os.Bundle; // add this
public class MainActivity extends ReactActivity {

  // @Override
  //   protected void onCreate(Bundle savedInstanceState) {
  //       SplashScreen.show(this, R.style.SplashStatusBarTheme);
  //        super.onCreate(savedInstanceState);
  //  }
 
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "AskNeo";
  }
  
  //f0r splash
  @Override                                             // add this
  protected void onCreate(Bundle savedInstanceState) {  // add this
    SplashScreen.show(this);                            // add this
    super.onCreate(savedInstanceState);                 // add this
  }                                                     // add this


  //For Navigation Stack
//   @Override
// protected void onCreate(Bundle savedInstanceState) {
//   super.onCreate(null);
// }
}
