package com.cybertek.pages.activity_stream;

import com.cybertek.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

public class TasksPage {

    @FindBy(css = "span#feed-add-post-form-tab-tasks > span")
    @CacheLookup
    public WebElement tasksElement;

// //span[@id='bx-b-uploadfile-task-form-lifefeed_task_form']
    @FindBy(css = "#bx-b-uploadfile-task-form-lifefeed_task_form")
    @CacheLookup
    public WebElement uploadFile;

 //span[@id='bx-b-uploadfile-task-form-lifefeed_task_form']
    // //span[contains(text(),'Select document from Bitrix24')]
    //
    @FindBy (id ="blog-submit-button-save ")
    @CacheLookup
    public WebElement SendButton;

    @FindBy(css = ".tasks-task-mpf-link")
    @CacheLookup
    public WebElement Checklistbutton;

    @FindBy(xpath = "//span[@class='task-checklist-form-vpadding']//input[@placeholder='Things to do']")
    @CacheLookup
    public WebElement checklistTypeMessage;

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



    public TasksPage(){
        PageFactory.initElements(Driver.getDriver(), this);}
}
