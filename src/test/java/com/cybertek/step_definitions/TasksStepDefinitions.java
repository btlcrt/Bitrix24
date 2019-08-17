package com.cybertek.step_definitions;

import com.cybertek.pages.activityStreamPage.Tasks;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.Keys;

public class TasksStepDefinitions  {
    Tasks t1 = new Tasks();

    @Given("user goes to task module")
    public void user_goes_to_module() {
     t1.tasksElement.click();
    }

    @Then("clicks to upload files")
    public void clicks_to_upload_files() {
      t1.uploadFile.click();
    }

    @Then("selects a document from bitrix")
    public void selects_a_document_from_bitrix(Integer int1) {
        t1.SelectDocumentFromBtrix.click();
    }

    @Then("go to sales and marketing folder")
    public void go_to_sales_and_marketing_folder() {
       t1.salesAndMarketing.click();
    }

    @Then("opens Quotes folder")
    public void opens_Quotes_folder() {
       t1.quotes.click();
    }

    @Then("click on the document to add")
    public void click_on_the_document_to_add() {
        t1.quoteDocx.click();
    }

    @Then("adds things to do")
    public void adds_things_to_do() {
        t1.quoteDocx.sendKeys("today was a long day", Keys.ENTER);
    }

    @Then("user verifies that file was added")
    public void user_verifies_that_file_was_added() {
//       String expected = "Quote.docx";
//       String actual = t1.getVerifyQuoteDocx.getText();
//        Assert.assertEquals(expected, actual);
        System.out.println("Quote.docx is displayed "+t1.verifyQuoteDocx.isDisplayed());

    }


}
