package com.cybertek.pages.dashboards;

import com.cybertek.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DasboardPageBtrix {

    public DasboardPageBtrix(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//span[contains(text(),'Activity Stream')]")
    public WebElement activityStream;
}
