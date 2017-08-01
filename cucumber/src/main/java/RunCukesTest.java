

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions.*;

@RunWith(Cucumber.class)
@CucumberOptions(  monochrome = true,
        features = "src/main/resources/",
        format = { "pretty","html: cucumber-html-reports",
                "json: cucumber-html-reports/cucumber.json" })
       // glue = "src/main/java/" )
public class RunCukesTest {

}