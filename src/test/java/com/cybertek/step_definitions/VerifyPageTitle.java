package com.cybertek.step_definitions;

import com.cybertek.pages.dashboards.DasboardPageBtrix;
import com.cybertek.utilities.Driver;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class VerifyPageTitle {
    DasboardPageBtrix dasboardPageBtrix = new DasboardPageBtrix();


    @Then("click on Activity Stream")
    public void click_on_Activity_Stream() {
        dasboardPageBtrix.activityStream.click();
    }

    @Then("user verifys the module title is Portal")
    public void user_verifys_the_module_title_is_Portal() {
        Assert.assertEquals(Driver.getDriver().getTitle(),"Portal");
    }

}
