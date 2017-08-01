import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 * Created by gopim on 2017-07-31.
 */

public class MyStepdefs {

    @Given("^Scotia Login Page$")
    public void scotia_Login_Page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue("Login pagge pendidng.",true);
    }

    @When("^i See username$")
    public void i_See_username() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue("Login pagge pendidng.",true);
    }

    @When("^password$")
    public void password() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue("Login pagge pendidng.",true);
    }

    @Then("^Enter username and password$")
    public void enter_usrename_and_password() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue("Login pagge pendidng.",true);
    }

    @Then("^click on login button$")
    public void click_on_login_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue("Login pagge pendidng.",true);
    }


}