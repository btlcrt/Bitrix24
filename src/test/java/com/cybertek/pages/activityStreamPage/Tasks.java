package com.cybertek.pages.activityStreamPage;

import com.cybertek.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Tasks {

    @FindBy(xpath = "//span[@id='feed-add-post-form-tab-tasks']//span[contains(text(),'Task')]")
    @CacheLookup
    public WebElement tasksElement;


    @FindBy(xpath = "//span[@id='bx-b-uploadfile-task-form-lifefeed_task_form']")
    @CacheLookup
    public WebElement uploadFile;


    @FindBy(xpath="//div[@id='diskuf-selectdialog-RzwQmDG']//span[@class='wd-fa-add-file-light-title-text diskuf-selector-link'][contains(text(),'Select document from Bitrix24')]")
    @CacheLookup
    public WebElement SelectDocumentFromBtrix;

    @FindBy(xpath = "//span[contains(text(),'Sales and marketing')]")
    @CacheLookup
    public WebElement salesAndMarketing;

    @FindBy(xpath = "//a[contains(text(),'Quotes')]")
    @CacheLookup
    public WebElement quotes;

    @FindBy(xpath = "//a[@class='bx-file-dialog-content-link bx-file-dialog-icon bx-file-dialog-icon-file']")
    @CacheLookup
    public WebElement quoteDocx;


    @FindBy(xpath = "//span[@class='popup-window-button popup-window-button-accept']")
    @CacheLookup
    public WebElement selectButton;

    // //a[@id='disk-attach-9']
    @FindBy(xpath = "//div[@class='task-info-panel-title']//input[@placeholder='Things to do']")
    @CacheLookup
    public WebElement thingsToDo;


    @FindBy(xpath = "//span[@class='f-wrap']")
    @CacheLookup
    public WebElement verifyQuoteDocx;

    @FindBy(xpath = "//div[@class='task-info-panel-title']//input[@placeholder='Things to do']")
    @CacheLookup
    public WebElement getVerifyQuoteDocx;



    public Tasks(){
        PageFactory.initElements(Driver.getDriver(), this);}
}
