import { TITLE_FONT } from '@/config';
import { ClientSideButton } from './ui/ClientSideButton';
import { LinkComponent } from './ui/LinkComponent';
import { redirect } from 'next/navigation';

export const TopBar = () => {
  return (
    <nav className="w-full border-b sm:w-full sm:block md:flex md:justify-center">
      <div className="md:w-2/3 sm:w-full">
        <div className="flex justify-between items-center px-10 h-[70px]">
          <div>
            <LinkComponent
              className={`${TITLE_FONT.className} font-bold text-4xl text-emerald-900`}
              href="/"
              text="HomFix"
            />
          </div>
          <div className="w-[40%] flex justify-around items-center">
            <LinkComponent
              className="font-semibold"
              href="/services"
              text="Servicios"
            />
            <LinkComponent
              className="font-semibold"
              href="/login"
              text="Registrarse / Ingresar"
            />
            <div>
              <ClientSideButton
                label="Sé un experto"
                className="text-emerald-700 border-emerald-700 font-semibold hover:bg-inherit hover:text-[#055240] hover:border-[#055240]"
                // onClick={() => redirect('/become-a-tasker')}
                size="lg"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
