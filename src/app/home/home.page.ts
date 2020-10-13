import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public popoverController: PopoverController,
    private router : Router
  ) {}

guidelines = [
  {
    "id": 1,
    "title": "Bat",
    "description": "The bat is the stick used to hit the ball to score runs. According to the rules, a bat can be no longer than 38 inches in length and 4.5 inches in width. It can weigh anywhere between 1 kg to 2.5 kg.",
    "urlImage": "assets/icon/batthis.png"
  },
  {
    "id": 2,
    "title": "Ball",
    "description": "The cricket ball is round in shape and is usually red or white in color and made of leather. A red ball is used in day matches or longer games (such as a five-day match) while a white ball is used in shorter format matches or in day/night matches.",
    "urlImage": "assets/icon/ball.png"
  },
  {
    "id": 3,
    "title": "Stumps",
    "description": "Stumps are wooden sticks that are beaten into the ground. They support two bails at the top and form a wicket. There are two wickets placed on opposite sides of the pitch. The stumps should be no longer than 28 inches in height and 9 inches in width.",
    "urlImage": "assets/icon/stumps.png"
  },
  {
    "id": 4,
    "title": "Ground",
    "description": "The ground for cricket is spherical in shape. The part where the batsman plays is known as the pitch. In international cricket, the pitch is in a rectangular shape and measures 20 meters in length and 3 meters in width. The quality of the pitch is one of the most",
    "urlImage": "assets/icon/ground.png"
  },
  {
    "id": 5,
    "title": "Pitch",
    "description": "pitch In international cricket, the pitch is in a rectangular shape and measures 20 meters in length and 3 meters in width. The quality of the pitch is one of the most",
    "urlImage": "assets/icon/pitch.png"
  },
  {
    "id": 6,
    "title": "Rules",
    "description": "is played between two teams each made up of eleven players Games comprise of at least one innings where each team will take turns in batting and fielding/bowling.",
    "urlImage": "assets/icon/setting.png"
  }

]


aspects = [
  {
    "id": 1,
    "title": "Teams",
    "description": "Game played by two teams of eleven players on a field with a wicket at either end of a 22-yard pitch, the object being for one side to score runs by hitting a hard leather-covered ball with a bat while the other side tries to dismiss them by bowling, catching, running them out, etc.",
    "icon": "assets/icon/icon.png"
  },
  {
    "id": 2,
    "title": "Batting",
    "description": "In cricket, batting is the act or skill of hitting the ball with a bat to score runs or prevent the loss of one's wicket. Any player who is currently batting is denoted as a batsman, batswoman, or batter, regardless of whether batting is their particular area of expertise.",
    "icon": "assets/icon/icon.png"
  },
  {
    "id": 3,
    "title": "Bowling",
    "description": "Bowling, in cricket, is the action of propelling the ball toward the wicket defended by a batter. A player skilled at bowling is called a bowler; a bowler who is also a competent batter is known as an all-rounder. ... If a ball is bowled illegally, an umpire will rule it a no-ball. ",
    "icon": "assets/icon/icon.png"
  },
  {
    "id": 4,
    "title": "Fielding",
    "description": " Fielding in the sport of cricket is the action of fielders in collecting the ball after it is struck by the batsman, to limit the number of runs that the batsman scores and/or to get the batsman out by catching the ball in flight or by running the batsman out.",
    "icon": "assets/icon/icon.png"
  },
  {
    "id": 5,
    "title": "Umpire",
    "description": " In cricket, an umpire (from the Old French nompere meaning not a peer, i.e. not a member of one of the teams, impartial) is a person who has the authority to make decisions about events on the cricket field, according to the Laws of Cricket.",
    "icon": "assets/icon/icon.png"
  },
  {
    "id": 6,
    "title": "Captain",
    "description": " The captain of a cricket team, often referred to as the skipper, is the appointed leader, having several additional roles and responsibilities over and above those of the other players. ... Before the game the captains toss for innings.",
    "icon": "assets/icon/icon.png"
  }

]

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'my-custom-class'
    })
    return await popover.present();
  }

  getDate(guideline) {
    this.router.navigate(['/guide-details', {
      'id': guideline.id,
      'title': guideline.title,
      'description': guideline.description,
      'urlImage': guideline.urlImage
    }
  ])
    // alert(guideline.id);
    // console.log(JSON.stringify(guideline))
  }

  getAspect(aspect) {
    this.router.navigate(['/aspects-details', {
        'id': aspect.id,
        'title': aspect.title,
        'description': aspect.description,
        'icon': aspect.icon
    }
  ])
  }

}
