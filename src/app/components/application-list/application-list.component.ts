import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/shared/class/application';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {
  constructor() {}

  private arrayApplications: Application[] = [
    {
      name: 'HalloFighters',
      img:
        'https://camo.githubusercontent.com/3387f76995ab5585cdd267729cc2be64235bfa1d/68747470733a2f2f33353361323363353030646465336232616435382d63343966653765373335356433383438343532373066346137613061376161312e73736c2e6366322e7261636b63646e2e636f6d2f3565343363643632343566623632303030383964353836632f73637265656e73686f742e706e67',
      link: 'https://cranky-shirley-edcd00.netlify.com/',
      usedTechnos: ['HTML', 'CSS', 'TypeScript', 'Angular']
    },
    {
      name: 'Space',
      img:
        'https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5e45260c84ed9d0008ec0503/screenshot.png',
      link: 'https://festive-darwin-3e8cdb.netlify.com/',
      usedTechnos: ['HTML', 'CSS', 'TypeScript', 'Angular']
    },
    {
      name: 'Chrono_VanillaJS',
      img: '../../assets/img/Chrono_Angular.png',
      link: 'https://sad-nobel-a89988.netlify.app/',
      usedTechnos: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  public showedArray: Application[];

  private search() {
    /* needfix */


    const filter = () => {
      if (techno === 'Toutes') {
        this.showedArray = this.arrayApplications.filter(x =>
          x.name.includes(name)
        );
      } else {
        this.showedArray = this.arrayApplications.filter(x =>
          x.usedTechnos.includes(techno)
        );
        this.showedArray = this.showedArray.filter(x => x.name.includes(name));
      }
    };

    const techSelect = document.getElementById('search-by-techno');
    const searchInput = document.getElementById('search-by-name');
    let techno: string;
    let name: string;

    techSelect.addEventListener('change', () => {
      techno = techSelect.value;
      name = searchInput.value;
      filter();
    });

    searchInput.oninput = () => {
      techno = techSelect.value;
      name = searchInput.value;
      filter();
    };
  }


  ngOnInit() {
    this.search();
    this.showedArray = this.arrayApplications.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
  }
}
