package com.cybertek.step_definitions;

import com.cybertek.pages.activity_stream.TasksPage;
import com.cybertek.utilities.BrowserUtils;
import com.cybertek.utilities.Driver;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class TasksStepDefinitions  {
    TasksPage tasks = new TasksPage();


    @Then("user goes to task module")
    public void user_goes_to_task_module() {
    tasks.tasksElement.click();
}

    @Then("adds things to do")
    public void adds_things_to_do() {
       // tasks.thingsToDo.click();
        tasks.thingsToDo.sendKeys("today was a long day");

        BrowserUtils.waitPlease(3);
    }
    @Then("click on checklist")
    public void click_on_checklist() {
        tasks.Checklistbutton.click();
    }

    @Then("click on send button")
    public void click_on_send_button() {
     tasks.SendButton.click();
    }


    @Then("user verifies that file was added")
    public void user_verifies_that_file_was_added() {
        String expected = "created a task";
        DateFormat dateFormat = new SimpleDateFormat("HH:mm");
        Date date = new Date();
        String date1= dateFormat.format(date);
        String Current_time=date1;
        String Checklist_timeAdded = Driver.getDriver().findElement
                (By.xpath("//div[@id='sonet_log_day_item_tyjC1BPu']//div[@class='feed-post-time-wrap']")).getText();
        Assert.assertEquals(Current_time, Checklist_timeAdded);

        String verify = Checklist_timeAdded==Current_time ? "Verified, checklist added": "Not verified, checklist not added";
        System.out.println();

    }


}
