import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models//Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");

    res.send("Home Page");
    // send | json | redirect | end | render
  } catch (err) {
    console.log("Error, go home", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");

    res.send("Login Page");
  } catch (err) {
    console.log("Error, getLogin", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");

    res.send("Signup Page");
  } catch (err) {
    console.log("Error, getSignup", err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);
    const input: LoginInput = req.body;

    const memberService = new MemberService();
    const result = await memberService.processLogin(input);

    res.send(result);
  } catch (err) {
    console.log("Error, processLogin:", err);
    res.send(err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("Controller: processSignup\n");

    const newMember: MemberInput = req.body;
    console.log("Member Initial Input:", newMember);

    newMember.memberType = MemberType.RESTAURANT;
    console.log("Restaurant Type Member Data:", newMember);

    const memberService = new MemberService();

    // Controller ishni tugatdi va Business logic Service’ga o‘tdi (argument)
    const result = await memberService.processSignup(newMember);

    console.log("Response to client:", result);

    // Nega o'zi biza client ga qaytarib Natijani qaytaryabmiz u succces bo'lsa ham
    res.send(result);
  } catch (err: any) {
    console.log("Error, processSignup ", err);
    res.send(err);

    // console.log("Error, processSignup", err);
    // res.status(err.code || 500).send(err);
  }
};

export default restaurantController;
