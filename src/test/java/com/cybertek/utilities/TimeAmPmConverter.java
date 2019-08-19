package com.cybertek.utilities;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TimeAmPmConverter {
    public static void hour24() throws ParseException {
        String now = new SimpleDateFormat("hh:mm aa").format(new java.util.Date().getTime());
        SimpleDateFormat inFormat = new SimpleDateFormat("hh:mm aa");
        SimpleDateFormat outFormat = new SimpleDateFormat("HH:mm aa");
        String time24 = outFormat.format(inFormat.parse(now));

        System.out.println(time24);
    }

    public static void hour12() throws ParseException {
        DateFormat dateFormat = new SimpleDateFormat("hh:mm a"); //a represents pm am relationship with time
        Date date = new Date();
        String time12= dateFormat.format(date);

        System.out.println(time12);
    }
}
